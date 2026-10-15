import { motion } from "framer-motion";
import { useState } from "react";
import { useTranslation } from "react-i18next";

export function DeviceFrame({ url, title }) {
    const { t } = useTranslation();
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
                <div className="h-[calc(100%-32px)] overflow-y-auto">
                    <iframe
                        src={url}
                        title={t("projects.previewTitle", { title })}
                        className="
                    w-full 
                    h-[1200px] 
                    md:h-full 
                    bg-white 
                    pointer-events-none 
                    md:pointer-events-auto
                  "
                        onError={() => setError(true)}
                    />
                </div>
            ) : (
                <div className="flex items-center justify-center h-full text-sm text-muted-foreground">
                    {t("projects.previewUnavailable")}
                </div>
            )}
        </motion.div>
    );
}