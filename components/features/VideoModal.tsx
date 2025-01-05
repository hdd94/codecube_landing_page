"use client";

import { useState } from 'react';
import { Dialog } from '@headlessui/react';
import {Button} from "@/components/ui/Button";

export function VideoModal() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <Button
                variant="outline"
                onClick={() => setIsOpen(true)}
                className="flex items-center space-x-2"
            >
                <span>▶</span>
                <span>Watch Demo</span>
            </Button>

            <Dialog
                open={isOpen}
                onClose={() => setIsOpen(false)}
                className="relative z-50"
            >
                <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
                <div className="fixed inset-0 flex items-center justify-center p-4">
                    <Dialog.Panel className="bg-white rounded-lg p-4 max-w-4xl w-full">
                        <div className="aspect-video bg-gray-100">
                            {/* Video-Player hier einfügen */}
                        </div>
                        <Button
                            variant="secondary"
                            onClick={() => setIsOpen(false)}
                            className="mt-4"
                        >
                            Close
                        </Button>
                    </Dialog.Panel>
                </div>
            </Dialog>
        </>
    );
}