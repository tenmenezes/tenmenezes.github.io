import { motion } from 'framer-motion'
import { ArrowLeft, Compass } from 'lucide-react'
import { Link, useLocation } from 'react-router-dom'
import { baseTransition, fadeUp, staggerContainer } from '../motionConfig'

export function NotFoundPage() {
    const { pathname } = useLocation()

    return (
        <main className="relative overflow-hidden border-b border-border/60 bg-background">
            <motion.div
                aria-hidden="true"
                initial={{ opacity: 0, scale: 1.08 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ ...baseTransition, duration: 1.2 }}
                className="absolute inset-0 bg-[radial-gradient(circle_at_top,_hsl(var(--foreground)/0.08),_transparent_35%),radial-gradient(circle_at_bottom_right,_hsl(var(--muted-foreground)/0.12),_transparent_30%)]"
            />
            <motion.div
                aria-hidden="true"
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.4 }}
                transition={{ ...baseTransition, delay: 0.12, duration: 1 }}
                className="absolute inset-0 [background-image:linear-gradient(hsl(var(--border)/0.5)_1px,transparent_1px),linear-gradient(90deg,hsl(var(--border)/0.5)_1px,transparent_1px)] [background-size:32px_32px]"
            />

            <section className="relative mx-auto flex min-h-[72vh] max-w-5xl items-center px-4 py-16 sm:px-6 lg:px-0 lg:py-24">
                <motion.div
                    initial={{ opacity: 0, y: 28, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ ...baseTransition, duration: 0.9 }}
                    className="w-full overflow-hidden rounded-[2rem] bg-background/90 shadow-[0_20px_80px_hsl(var(--foreground)/0.08)] backdrop-blur"
                >
                    <motion.div
                        variants={staggerContainer(0.08)}
                        initial="hidden"
                        animate="visible"
                        className="grid gap-10 p-8 sm:p-10 lg:grid-cols-[1.4fr_0.8fr] lg:p-14"
                    >
                        <div>
                            <motion.div
                                variants={fadeUp}
                                transition={baseTransition}
                                className="inline-flex items-center justify-center gap-2 rounded-full border border-border/60 bg-muted/40 px-3 py-1 text-[0.65rem] uppercase tracking-[0.24em] text-muted-foreground"
                            >
                                <motion.div
                                    animate={{ rotate: [0, -8, 8, 0], scale: [1, 1.06, 1] }}
                                    transition={{ duration: 3.2, repeat: Infinity, ease: 'easeInOut' }}
                                >
                                    <Compass className="h-3.5 w-3.5 text-red-800 animate-pulse" />
                                </motion.div>
                                <p>Erro 404</p>
                            </motion.div>

                            <motion.p
                                variants={fadeUp}
                                transition={{ ...baseTransition, delay: 0.04 }}
                                className="font-mono mt-6 text-4xl font-medium leading-none tracking-[-0.08em] text-foreground sm:text-[6rem] lg:text-[7rem]"
                            >
                                404
                            </motion.p>

                            <motion.h1
                                variants={fadeUp}
                                transition={{ ...baseTransition, delay: 0.08 }}
                                className="mt-4 max-w-lg text-2xl font-medium uppercase tracking-[0.2em] text-foreground sm:text-3xl"
                            >
                                Esta rota não existe no portfólio
                            </motion.h1>

                            <motion.p
                                variants={fadeUp}
                                transition={{ ...baseTransition, delay: 0.12 }}
                                className="mt-5 max-w-xl text-sm leading-relaxed text-muted-foreground text-justify sm:text-base"
                            >
                                A página que voce tentou acessar nao foi encontrada. O endereço pode
                                ter sido digitado incorretamente, removido ou ainda não foi publicado.
                            </motion.p>

                            <motion.div
                                variants={fadeUp}
                                transition={{ ...baseTransition, delay: 0.16 }}
                                className="mt-8 flex flex-wrap gap-3"
                            >
                                <motion.button
                                    type="button"
                                    onClick={() => window.history.back()}
                                    whileHover={{ x: -4 }}
                                    whileTap={{ scale: 0.98 }}
                                    className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-5 py-3 text-xs font-medium uppercase tracking-[0.22em] text-muted-foreground transition hover:bg-muted hover:text-foreground"
                                >
                                    <ArrowLeft className="h-4 w-4" />
                                    Página anterior
                                </motion.button>
                            </motion.div>
                        </div>

                        <motion.aside
                            variants={fadeUp}
                            transition={{ ...baseTransition, delay: 0.2 }}
                            className="flex h-full flex-col justify-between gap-6 rounded-[1.5rem] border border-border/60 bg-muted/20 p-6"
                        >
                            <div>
                                <p className="text-[0.65rem] uppercase tracking-[0.24em] text-muted-foreground">
                                    Caminho acessado
                                </p>
                                <motion.p
                                    initial={{ opacity: 0, x: 10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ ...baseTransition, delay: 0.28 }}
                                    className="mt-3 break-all rounded-2xl border border-border/60 bg-background px-4 py-3 font-mono text-lg text-foreground"
                                >
                                    {pathname}
                                </motion.p>
                            </div>

                            <div className="space-y-3">
                                <p className="text-[0.65rem] uppercase tracking-[0.24em] text-muted-foreground">
                                    Sugestões
                                </p>

                                <motion.ul
                                    variants={staggerContainer(0.06)}
                                    initial="hidden"
                                    animate="visible"
                                    className="space-y-2 text-sm leading-relaxed text-muted-foreground"
                                >
                                    <motion.li variants={fadeUp} transition={{ ...baseTransition, delay: 0.3 }}>
                                        Confira se o link foi digitado corretamente.
                                    </motion.li>
                                    <motion.li variants={fadeUp} transition={{ ...baseTransition, delay: 0.34 }}>
                                        Use o menu principal para voltar a uma seção válida.
                                    </motion.li>
                                </motion.ul>
                            </div>
                        </motion.aside>
                    </motion.div>
                </motion.div>
            </section>
        </main>
    )
}