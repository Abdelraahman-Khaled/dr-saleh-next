import { notFound } from 'next/navigation';
import { cookies } from 'next/headers';
import {
    dehydrate,
    HydrationBoundary,
    QueryClient,
} from '@tanstack/react-query';
import { getOperationDetails } from '../../../../lib/api/operations';
import OperationDetailContent from '../../components/operations/OperationDetailContent';

export const dynamic = 'force-dynamic';

export async function generateMetadata({ params }) {
    const { slug } = await params;

    // Fetch data directly for metadata
    let operation;
    try {
        operation = await getOperationDetails(slug);
    } catch (error) {
        return {
            title: 'Dr.saleh | Operation',
        };
    }

    if (!operation) return {};

    const cookieStore = await cookies();
    const language = (await cookieStore.get("NEXT_LOCALE"))?.value || "ar";

    const title = language === 'ar'
        ? (operation.meta_title_ar || operation.title_ar)
        : (operation.meta_title_en || operation.title_en);

    const description = language === 'ar'
        ? (operation.meta_description_ar || operation.description_ar)
        : (operation.meta_description_en || operation.description_en);

    // Try to find language specific photo, or landing photo, or first photo
    const featuredPhoto = operation.photos?.find(p => p.is_arabic === (language === 'ar')) ||
        operation.photos?.find(p => p.is_landing) ||
        operation.photos?.[0];

    const photoUrl = featuredPhoto?.url || operation.image;

    return {
        title: `Dr.saleh | ${title}`,
        description,
        icons: {
            icon: '/images/icons/favicon.ico',
            shortcut: '/images/icons/favicon.ico',
        },
        openGraph: {
            title: `Dr.saleh | ${title}`,
            description,
            images: photoUrl ? [photoUrl] : ["/images/icons/favicon.ico"],
        },
        alternates: {
            canonical: `/operations/${operation.slug}`,
            languages: {
                ar: `/operations/${operation.slug_ar || operation.slug}`,
                en: `/operations/${operation.slug || operation.slug_ar}`,
            }
        }
    }
}

export default async function OperationDetailPage({ params }) {
    const { slug } = await params;

    const queryClient = new QueryClient();

    // Use getOperationDetails for prefetching
    await queryClient.prefetchQuery({
        queryKey: ['operation', slug],
        queryFn: () => getOperationDetails(slug),
    });

    // Get the data from cache
    const operation = queryClient.getQueryData(['operation', slug]);

    if (!operation) notFound();

    return (
        <HydrationBoundary state={dehydrate(queryClient)}>
            <OperationDetailContent slug={slug} initialOperation={operation} />
        </HydrationBoundary>
    );
}
