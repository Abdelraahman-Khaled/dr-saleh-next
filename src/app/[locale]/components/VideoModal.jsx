export default function VideoModal({ videoUrl, isOpen, onClose }) {
    if (!isOpen) return null;

    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
            onClick={onClose}
        >
            <div className="relative max-w-5xl w-full" onClick={(e) => e.stopPropagation()}>
                <button
                    className="absolute -top-12 right-0 text-white text-xl hover:text-[#17a2b8] transition-colors cursor-pointer"
                    onClick={onClose}
                >
                    <i className="ri-close-line text-4xl"></i>
                </button>
                <div className="relative pt-[56.25%] bg-black rounded-2xl overflow-hidden">
                    <iframe
                        src={videoUrl}
                        className="absolute inset-0 w-full h-full"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        title="Video Player"
                    ></iframe>
                </div>
            </div>
        </div>
    );
}
