import React from 'react';

interface ModalScrollProps {
    isOpen: boolean;
    onClose: () => void;
    title: string;
    content: string;
}

export default function ModalViewHtml({ isOpen, onClose, title, content }: ModalScrollProps) {
    if (!isOpen) return null;

    return (
        <div className="fixed w-screen h-screen inset-0 overflow-y-auto" style={{ zIndex: 1000 }}>
            <div className="flex items-start justify-center min-h-screen">
                <div className="fixed inset-0 bg-black opacity-50" onClick={() => {
                    onClose()
                }}></div>
                <div
                    className="relative bg-white rounded-lg shadow-xl w-full overflow-y-scroll"
                    style={{
                        width: "60%",
                        height: "50vh",
                        marginTop: "20vh",

                    }}
                >
                    <div
                        className="sticky top-0 bg-white shadow p-4 z-10"
                        style={{ borderBottom: "1px solid #ddd" }}
                    >
                        <h2 className="text-left lg:text-5xl font-bold w-10/12" style={{ color: "#1f1f1f" }}>
                            {title} <br/>
                            <span className="text-lg text-gray-500">12/12/2024 10:30</span>
                        </h2>
                        <button className="absolute top-0 right-0 mx-2 my-0 px-3 py-2 rounded-xl hover:text-red-500 text-3xl font-thin scale-150 opacity-55" onClick={onClose}>
                            x
                        </button>
                    </div>
                    <div className="px-6 py-10 overflow-y-auto lg:text-3xl" style={{ maxHeight: "calc(50vh - 100px)" }}>
                        <div dangerouslySetInnerHTML={{ __html: content }} />
                    </div>
                </div>
            </div>
        </div>
    );
}
