
import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import {
    Star,
    GitFork,
    Calendar,
    MapPin,
    LinkIcon,
    Users,
    BookOpen,
    GitBranch,
    Code2,
    Activity,
    ExternalLink,
} from "lucide-react"

interface GitHubUser {
    login: string
    name: string
    avatar_url: string
    bio: string
    location: string
    blog: string
    public_repos: number
    followers: number
    following: number
    created_at: string
}

interface Repository {
    id: number
    name: string
    description: string
    html_url: string
    stargazers_count: number
    forks_count: number
    watchers_count: number
    language: string
    updated_at: string
    topics: string[]
}

const GITHUB_USERNAME = import.meta.env.VITE_GITHUB_USERNAME
const GITHUB_TOKEN = import.meta.env.VITE_GITHUB_TOKEN

const GitHubProfile = () => {
    const [user, setUser] = useState<GitHubUser | null>(null)
    const [repos, setRepos] = useState<Repository[]>([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState<string | null>(null)



    useEffect(() => {
        const fetchGitHubData = async () => {
            try {
                setLoading(true)

                const headers = {
                    Authorization: `token ${GITHUB_TOKEN}`,
                }


                const userResponse = await fetch(`https://api.github.com/users/${GITHUB_USERNAME}`, {
                    headers,
                })
                if (!userResponse.ok) throw new Error('Failed to fetch user data')
                const userData = await userResponse.json()
                setUser(userData)

                const reposResponse = await fetch(
                    `https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=6`,
                    { headers }
                )
                if (!reposResponse.ok) throw new Error('Failed to fetch repositories')
                const reposData = await reposResponse.json()
                setRepos(reposData)
            } catch (err) {
                setError(err instanceof Error ? err.message : 'An error occurred')
            } finally {
                setLoading(false)
            }
        }

        fetchGitHubData()
    }, [])

    const getLanguageColor = (language: string) => {
        const colors: { [key: string]: string } = {
            JavaScript: "#f1e05a",
            TypeScript: "#2b7489",
            Python: "#3572A5",
            Java: "#b07219",
            "C++": "#f34b7d",
            HTML: "#e34c26",
            CSS: "#1572B6",
            React: "#61dafb",
            Vue: "#4FC08D",
            Go: "#00ADD8",
            Rust: "#dea584",
            PHP: "#4F5D95",
        }
        return colors[language] || "#8b5cf6"
    }

    const formatDate = (dateString: string) => {
        return new Date(dateString).toLocaleDateString("en-US", {
            year: "numeric",
            month: "short",
            day: "numeric",
        })
    }

    // Holographic Stats Panel Component
    const StatsPanel = ({
        icon: Icon,
        label,
        value,
        delay = 0,
    }: {
        icon: any
        label: string
        value: string | number
        delay?: number
    }) => (
        <motion.div
            className="relative bg-gradient-to-br from-gray-900/90 via-gray-800/80 to-gray-900/90 backdrop-blur-xl rounded-2xl border border-cyan-400/30 p-6 overflow-hidden"
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ delay, duration: 0.6 }}
            whileHover={{
                scale: 1.05,
                borderColor: "#10b981",
                boxShadow: "0 0 30px rgba(16, 185, 129, 0.3)",
            }}
        >
            {/* Holographic Grid Background */}
            <div className="absolute inset-0 opacity-10">
                <svg width="100%" height="100%" className="absolute inset-0">
                    <defs>
                        <pattern id={`grid-${label}`} width="20" height="20" patternUnits="userSpaceOnUse">
                            <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#00d9ff" strokeWidth="0.5" opacity="0.3" />
                        </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill={`url(#grid-${label})`} />
                </svg>
            </div>

            <div className="relative z-10 flex items-center gap-4">
                <motion.div
                    className="p-3 rounded-xl bg-gradient-to-br from-cyan-500/20 to-emerald-500/20 border border-cyan-400/30"
                    animate={{
                        boxShadow: [
                            "0 0 20px rgba(6, 182, 212, 0.3)",
                            "0 0 30px rgba(16, 185, 129, 0.4)",
                            "0 0 20px rgba(6, 182, 212, 0.3)",
                        ],
                    }}
                    transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
                >
                    <Icon className="w-6 h-6 text-cyan-400" />
                </motion.div>
                <div>
                    <motion.div
                        className="text-2xl font-bold text-white"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: delay + 0.3 }}
                    >
                        {value}
                    </motion.div>
                    <div className="text-sm text-gray-400">{label}</div>
                </div>
            </div>

            {/* Animated Border Glow */}
            <motion.div
                className="absolute -inset-0.5 bg-gradient-to-r from-cyan-400 via-emerald-400 to-purple-400 rounded-2xl opacity-20"
                animate={{
                    opacity: [0.2, 0.4, 0.2],
                    background: [
                        "linear-gradient(45deg, #06b6d4, #10b981, #8b5cf6)",
                        "linear-gradient(45deg, #10b981, #8b5cf6, #06b6d4)",
                        "linear-gradient(45deg, #8b5cf6, #06b6d4, #10b981)",
                    ],
                }}
                transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY }}
            />
        </motion.div>
    )

    // Repository Card Component
    const RepoCard = ({ repo, index }: { repo: Repository; index: number }) => (
        <motion.div
            className="relative bg-gradient-to-br from-gray-900/90 via-gray-800/80 to-gray-900/90 backdrop-blur-xl rounded-2xl border border-gray-700/50 p-6 overflow-hidden group"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.6 }}
            whileHover={{
                scale: 1.02,
                borderColor: "#10b981",
                boxShadow: "0 0 30px rgba(16, 185, 129, 0.2)",
            }}
        >
            {/* Holographic Grid Background */}
            <div className="absolute inset-0 opacity-5 group-hover:opacity-10 transition-opacity">
                <svg width="100%" height="100%" className="absolute inset-0">
                    <defs>
                        <pattern id={`repo-grid-${repo.id}`} width="15" height="15" patternUnits="userSpaceOnUse">
                            <path d="M 15 0 L 0 0 0 15" fill="none" stroke="#00d9ff" strokeWidth="0.5" />
                        </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill={`url(#repo-grid-${repo.id})`} />
                </svg>
            </div>

            <div className="relative z-10">
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-2">
                        <BookOpen className="w-5 h-5 text-cyan-400" />
                        <h3 className="text-lg font-semibold text-white group-hover:text-cyan-400 transition-colors">
                            {repo.name}
                        </h3>
                    </div>
                    <motion.a
                        href={repo.html_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-lg bg-gray-800/50 border border-gray-600/50 hover:border-cyan-400/50 transition-colors"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <ExternalLink className="w-4 h-4 text-gray-400 hover:text-cyan-400" />
                    </motion.a>
                </div>

                {/* Description */}
                <p className="text-gray-400 text-sm mb-4 line-clamp-2">{repo.description || "No description available"}</p>

                {/* Topics */}
                {repo.topics && repo.topics.length > 0 && (
                    <div className="flex flex-wrap gap-2 mb-4">
                        {repo.topics.slice(0, 3).map((topic) => (
                            <span
                                key={topic}
                                className="px-2 py-1 text-xs bg-gradient-to-r from-cyan-500/20 to-emerald-500/20 border border-cyan-400/30 rounded-full text-cyan-300"
                            >
                                {topic}
                            </span>
                        ))}
                    </div>
                )}

                {/* Stats */}
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4 text-sm text-gray-400">
                        {repo.language && (
                            <div className="flex items-center gap-1">
                                <div className="w-3 h-3 rounded-full" style={{ backgroundColor: getLanguageColor(repo.language) }} />
                                <span>{repo.language}</span>
                            </div>
                        )}
                        <div className="flex items-center gap-1">
                            <Star className="w-4 h-4" />
                            <span>{repo.stargazers_count}</span>
                        </div>
                        <div className="flex items-center gap-1">
                            <GitFork className="w-4 h-4" />
                            <span>{repo.forks_count}</span>
                        </div>
                    </div>
                    <div className="text-xs text-gray-500">Updated {formatDate(repo.updated_at)}</div>
                </div>
            </div>

            {/* Hover Glow Effect */}
            <motion.div
                className="absolute -inset-0.5 bg-gradient-to-r from-cyan-400/0 via-emerald-400/0 to-purple-400/0 rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-300"
                style={{
                    background:
                        "linear-gradient(45deg, rgba(6, 182, 212, 0.1), rgba(16, 185, 129, 0.1), rgba(139, 92, 246, 0.1))",
                }}
            />
        </motion.div>
    )

    // Contribution Activity Visualization
    const contributionData = Array.from({ length: 365 }, () => Math.floor(Math.random() * 4))

    const ContributionGraph = () => (
        <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white flex items-center gap-2">
                <Activity className="w-5 h-5 text-emerald-400" />
                Contribution Activity
            </h3>
            <div className="bg-gray-900/50 rounded-xl p-4 border border-gray-700/50">
                <div className="flex flex-wrap gap-1 mb-4 max-w-full">
                    {contributionData.map((level, index) => (
                        <motion.div
                            key={index}
                            className={`w-3 h-3 rounded-sm flex-shrink-0 ${level === 0
                                ? "bg-gray-800"
                                : level === 1
                                    ? "bg-emerald-900/50"
                                    : level === 2
                                        ? "bg-emerald-700/70"
                                        : "bg-emerald-500"
                                }`}
                            initial={{ scale: 0, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ delay: index * 0.001, duration: 0.2 }}
                            whileHover={{ scale: 1.2 }}
                            style={{
                                marginRight: index % 53 === 52 ? "8px" : "2px",
                                marginBottom: "2px",
                            }}
                        />
                    ))}
                </div>
                <div className="flex items-center justify-between text-sm text-gray-400">
                    <span>Less</span>
                    <div className="flex gap-1">
                        <div className="w-3 h-3 bg-gray-800 rounded-sm" />
                        <div className="w-3 h-3 bg-emerald-900/50 rounded-sm" />
                        <div className="w-3 h-3 bg-emerald-700/70 rounded-sm" />
                        <div className="w-3 h-3 bg-emerald-500 rounded-sm" />
                    </div>
                    <span>More</span>
                </div>
            </div>
        </div>
    )

    if (loading) {
        return (
            <section id="github" className="py-20 relative">
                <div className="container mx-auto px-6 max-w-6xl">
                    <div className="flex items-center justify-center min-h-[400px]">
                        <motion.div
                            className="relative"
                            animate={{ rotate: 360 }}
                            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                        >
                            <div className="w-16 h-16 border-4 border-cyan-400/30 border-t-cyan-400 rounded-full" />
                            <motion.div
                                className="absolute inset-2 border-2 border-emerald-400/30 border-t-emerald-400 rounded-full"
                                animate={{ rotate: -360 }}
                                transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                            />
                        </motion.div>
                    </div>
                </div>
            </section>
        )
    }

    if (error) {
        return (
            <section id="github" className="py-20 relative">
                <div className="container mx-auto px-6 max-w-6xl">
                    <div className="text-center">
                        <div className="text-red-400 mb-4">Error loading GitHub data: {error}</div>
                        <div className="text-gray-400">Please check the username and try again.</div>
                    </div>
                </div>
            </section>
        )
    }

    return (
        <section id="github" className="py-20 relative">
            <div className="container mx-auto px-6 max-w-6xl">
                {/* Section Header */}
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <motion.h2
                        className="text-4xl lg:text-5xl font-bold text-white mb-4"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                    >
                        GitHub
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-emerald-400 ml-4">
                            Profile
                        </span>
                    </motion.h2>
                    <motion.p
                        className="text-lg text-gray-400 max-w-2xl mx-auto"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                    >
                        Explore my open source contributions and development activity
                    </motion.p>
                </motion.div>

                {user && (
                    <>
                        {/* Profile Header */}
                        <motion.div
                            className="relative bg-gradient-to-br from-gray-900/90 via-gray-800/80 to-gray-900/90 backdrop-blur-xl rounded-3xl border border-cyan-400/30 p-8 mb-12 overflow-hidden"
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            style={{
                                boxShadow: "0 0 50px rgba(6, 182, 212, 0.1)",
                            }}
                        >
                            {/* Holographic Grid Background */}
                            <div className="absolute inset-0 opacity-5">
                                <svg width="100%" height="100%" className="absolute inset-0">
                                    <defs>
                                        <pattern id="profile-grid" width="30" height="30" patternUnits="userSpaceOnUse">
                                            <path d="M 30 0 L 0 0 0 30" fill="none" stroke="#00d9ff" strokeWidth="0.5" />
                                        </pattern>
                                    </defs>
                                    <rect width="100%" height="100%" fill="url(#profile-grid)" />
                                </svg>
                            </div>

                            <div className="relative z-10 flex flex-col md:flex-row items-center gap-8">
                                {/* Avatar */}
                                <motion.div
                                    className="relative"
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: 0.3, duration: 0.6 }}
                                >
                                    <motion.div
                                        className="w-32 h-32 rounded-full border-4 border-cyan-400/50 overflow-hidden"
                                        animate={{
                                            borderColor: ["#06b6d4", "#10b981", "#8b5cf6", "#06b6d4"],
                                        }}
                                        transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY }}
                                    >
                                        <img
                                            src={user.avatar_url || "/placeholder.svg"}
                                            alt={user.name}
                                            className="w-full h-full object-cover"
                                        />
                                    </motion.div>
                                    <motion.div
                                        className="absolute -inset-2 rounded-full border border-emerald-400/30"
                                        animate={{ rotate: 360 }}
                                        transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                                    />
                                </motion.div>

                                {/* Profile Info */}
                                <div className="flex-1 text-center md:text-left">
                                    <motion.h3
                                        className="text-3xl font-bold text-white mb-2"
                                        initial={{ opacity: 0, x: -30 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: 0.5 }}
                                    >
                                        {user.name}
                                    </motion.h3>
                                    <motion.p
                                        className="text-cyan-400 text-lg mb-4"
                                        initial={{ opacity: 0, x: -30 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: 0.6 }}
                                    >
                                        @{user.login}
                                    </motion.p>
                                    {user.bio && (
                                        <motion.p
                                            className="text-gray-400 mb-4 max-w-md"
                                            initial={{ opacity: 0, x: -30 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: 0.7 }}
                                        >
                                            {user.bio}
                                        </motion.p>
                                    )}
                                    <motion.div
                                        className="flex flex-wrap items-center gap-4 text-sm text-gray-400"
                                        initial={{ opacity: 0, x: -30 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: 0.8 }}
                                    >
                                        {user.location && (
                                            <div className="flex items-center gap-1">
                                                <MapPin className="w-4 h-4" />
                                                <span>{user.location}</span>
                                            </div>
                                        )}
                                        {user.blog && (
                                            <div className="flex items-center gap-1">
                                                <LinkIcon className="w-4 h-4" />
                                                <a
                                                    href={user.blog}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="hover:text-cyan-400 transition-colors"
                                                >
                                                    Website
                                                </a>
                                            </div>
                                        )}
                                        <div className="flex items-center gap-1">
                                            <Calendar className="w-4 h-4" />
                                            <span>Joined {formatDate(user.created_at)}</span>
                                        </div>
                                    </motion.div>
                                </div>
                            </div>
                        </motion.div>

                        {/* Stats Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                            <StatsPanel icon={BookOpen} label="Public Repositories" value={user.public_repos} delay={0.2} />
                            <StatsPanel icon={Users} label="Followers" value={user.followers} delay={0.4} />
                            <StatsPanel icon={GitBranch} label="Following" value={user.following} delay={0.6} />
                        </div>

                        {/* Contribution Graph */}
                        <ContributionGraph />

                        {/* Recent Repositories */}
                        <motion.div
                            className="mt-12"
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 1, duration: 0.8 }}
                        >
                            <div className="flex items-center gap-3 mb-8">
                                <Code2 className="w-6 h-6 text-cyan-400" />
                                <h3 className="text-2xl font-semibold text-white">Recent Repositories</h3>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {repos.map((repo, index) => (
                                    <RepoCard key={repo.id} repo={repo} index={index} />
                                ))}
                            </div>
                        </motion.div>
                    </>
                )}
            </div>
        </section>
    )
}

export default GitHubProfile
