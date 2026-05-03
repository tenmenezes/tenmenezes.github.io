import { motion } from "framer-motion";
import { useState } from "react";

export function DeviceFrame({ url }) {
    const [error, setError] = useState(false);

    return (
        <motion.div
            className="relative w-full h-full overflow-hidden rounded-xl border border-border bg-black"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
        >
            {/* Header fake tipo browser */}
            <div className="flex items-center gap-2 px-3 h-8 bg-neutral-900 border-b border-border">
                <span className="w-3 h-3 rounded-full bg-red-600" />
                <span className="w-3 h-3 rounded-full bg-yellow-600" />
                <span className="w-3 h-3 rounded-full bg-green-600" />
            </div>

            {!error ? (
                <iframe
                    src={url}
                    className="w-full h-[calc(100%-32px)] bg-white"
                    onError={() => setError(true)}
                />
            ) : (
                <div className="flex items-center justify-center h-full text-sm text-muted-foreground">
                    Preview indisponível
                </div>
            )}
        </motion.div>
    );
}