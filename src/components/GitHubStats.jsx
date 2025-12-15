import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { Github, Users, Book, ExternalLink } from 'lucide-react'
import * as GitHubCalendarPkg from 'react-github-calendar'

// Attempt to find the component
const GitHubCalendar = GitHubCalendarPkg.default || GitHubCalendarPkg.GitHubCalendar || GitHubCalendarPkg
import { useProjectStore } from '../store/projectStore'

const GitHubStats = ({ theme }) => {
    const { profile, fetchProfile } = useProjectStore()
    const scrollRef = useRef(null)

    useEffect(() => {
        fetchProfile()
    }, [fetchProfile])

    useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollLeft = scrollRef.current.scrollWidth
        }
    }, [profile])

    if (!profile) return null

    const calendarTheme = {
        light: ['#ebedf0', '#9be9a8', '#40c463', '#30a14e', '#216e39'],
        dark: ['#161b22', '#0e4429', '#006d32', '#26a641', '#39d353'],
    }

    return (
        <section className="py-20 px-6 relative bg-white dark:bg-slate-950 overflow-hidden transition-colors duration-300">
            <div className="container mx-auto max-w-4xl relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="relative group"
                >
                    {/* Animated Gradient Border */}
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-primary via-purple-500 to-cyan-500 rounded-3xl opacity-30 group-hover:opacity-100 blur transition duration-500" />

                    <div className="relative bg-white/90 dark:bg-slate-900/90 backdrop-blur-xl rounded-[22px] p-8 md:p-12 border border-slate-200 dark:border-white/10 overflow-hidden transition-colors duration-300">
                        <div className="grid md:grid-cols-2 gap-8 items-center mb-8">
                            {/* Profile Info */}
                            <div className="flex items-center gap-6">
                                <div className="relative">
                                    <div className="absolute -inset-2 bg-gradient-to-r from-primary to-purple-500 rounded-full opacity-50 blur-md animate-pulse" />
                                    <img
                                        src={profile.avatar_url}
                                        alt={profile.login}
                                        className="w-24 h-24 rounded-full border-2 border-slate-200 dark:border-white/20 relative z-10"
                                    />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-1">{profile.name || profile.login}</h3>
                                    <p className="text-primary">@{profile.login}</p>
                                    <p className="text-slate-600 dark:text-gray-400 text-sm mt-2 max-w-xs">{profile.bio}</p>
                                </div>
                            </div>

                            {/* Stats Grid */}
                            <div className="grid grid-cols-3 gap-4">
                                <div className="text-center p-4 bg-slate-100 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-white/5 hover:border-primary/30 transition-colors group/stat">
                                    <Book className="w-6 h-6 text-primary mx-auto mb-2 group-hover/stat:scale-110 transition-transform" />
                                    <div className="text-2xl font-bold text-slate-900 dark:text-white">{profile.public_repos}</div>
                                    <div className="text-xs text-slate-500 dark:text-gray-400">Repos</div>
                                </div>
                                <div className="text-center p-4 bg-slate-100 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-white/5 hover:border-primary/30 transition-colors group/stat">
                                    <Users className="w-6 h-6 text-purple-400 mx-auto mb-2 group-hover/stat:scale-110 transition-transform" />
                                    <div className="text-2xl font-bold text-slate-900 dark:text-white">{profile.followers}</div>
                                    <div className="text-xs text-slate-500 dark:text-gray-400">Followers</div>
                                </div>
                                <div className="text-center p-4 bg-slate-100 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-white/5 hover:border-primary/30 transition-colors group/stat">
                                    <Users className="w-6 h-6 text-cyan-400 mx-auto mb-2 group-hover/stat:scale-110 transition-transform" />
                                    <div className="text-2xl font-bold text-slate-900 dark:text-white">{profile.following}</div>
                                    <div className="text-xs text-slate-500 dark:text-gray-400">Following</div>
                                </div>
                            </div>
                        </div>

                        {/* Contribution Graph */}
                        <div className="mt-8 pt-8 border-t border-slate-200 dark:border-white/10">
                            <h4 className="text-lg font-semibold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                                <span className="w-1.5 h-6 bg-primary rounded-full" />
                                Contribution Graph
                            </h4>
                            <div
                                ref={scrollRef}
                                className="bg-slate-100 dark:bg-slate-800/50 rounded-xl p-4 border border-slate-200 dark:border-white/5 overflow-x-auto flex justify-start thin-scrollbar"
                            >
                                <div className="min-w-max">
                                    <GitHubCalendar
                                        username="VeejayAdolf-Lemita"
                                        colorScheme={theme}
                                        fontSize={12}
                                        blockSize={12}
                                        blockMargin={4}
                                        theme={calendarTheme}
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Action Button */}
                        <motion.a
                            href={profile.html_url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="absolute top-6 right-6 p-2 bg-slate-100 dark:bg-white/5 rounded-full hover:bg-slate-200 dark:hover:bg-white/10 transition-colors text-slate-400 dark:text-gray-400 hover:text-slate-600 dark:hover:text-white"
                            whileHover={{ rotate: 45 }}
                        >
                            <ExternalLink size={20} />
                        </motion.a>

                        <div className="mt-8 pt-8 border-t border-slate-200 dark:border-white/10 flex justify-between items-center">
                            <div className="flex items-center gap-2 text-sm text-slate-500 dark:text-gray-400">
                                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                                Live GitHub Data
                            </div>
                            <motion.a
                                href={profile.html_url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 text-primary hover:text-slate-900 dark:hover:text-white transition-colors text-sm font-medium"
                                whileHover={{ x: 5 }}
                            >
                                View Full Profile <ExternalLink size={16} />
                            </motion.a>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

export default GitHubStats
