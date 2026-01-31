import React, { useState } from 'react';
import { LineChart, Line, BarChart, Bar, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell, RadarChart, Radar, PolarGrid, PolarAngleAxis, PolarRadiusAxis } from 'recharts';

// Color palette for registries
const COLORS = {
  pypi: '#3572A5',
  npm: '#CB3837',
  crates: '#DEA584',
  rubygems: '#CC342D',
  maven: '#C71A36',
  neutral: '#6B7280'
};

// Package count growth data
const packageGrowthData = [
  { year: '2015', PyPI: 60000, npm: 200000, Crates: 2000, RubyGems: 100000, Maven: 150000 },
  { year: '2017', PyPI: 100000, npm: 500000, Crates: 10000, RubyGems: 130000, Maven: 200000 },
  { year: '2019', PyPI: 200000, npm: 1000000, Crates: 30000, RubyGems: 155000, Maven: 350000 },
  { year: '2021', PyPI: 350000, npm: 1500000, Crates: 70000, RubyGems: 170000, Maven: 500000 },
  { year: '2023', PyPI: 516000, npm: 1800000, Crates: 130000, RubyGems: 180000, Maven: 600000 },
  { year: '2025', PyPI: 717000, npm: 2000000, Crates: 210000, RubyGems: 190000, Maven: 658000 }
];

// Monthly downloads data (billions)
const downloadData = [
  { registry: 'npm', downloads: 184, unit: 'B/month', color: COLORS.npm },
  { registry: 'PyPI', downloads: 83.6, unit: 'B/month', color: COLORS.pypi },
  { registry: 'Maven', downloads: 116, unit: 'B/month', color: COLORS.maven },
  { registry: 'RubyGems', downloads: 4.15, unit: 'B/month', color: COLORS.rubygems },
  { registry: 'Crates', downloads: 15.2, unit: 'B/month', color: COLORS.crates }
];

// Monthly bandwidth data (petabytes)
const bandwidthData = [
  { registry: 'PyPI', bandwidth: 62.3, requests: 1200, color: COLORS.pypi },
  { registry: 'npm', bandwidth: 6, requests: 125, color: COLORS.npm },
  { registry: 'RubyGems', bandwidth: 5.66, requests: 51.3, color: COLORS.rubygems },
  { registry: 'Crates', bandwidth: 2.34, requests: 30, color: COLORS.crates },
  { registry: 'Maven', bandwidth: 50, requests: 100, color: COLORS.maven }
];

// Infrastructure costs data (monthly, in thousands USD)
const costData = [
  {
    registry: 'PyPI',
    cdnDonation: 1800,
    cdnCommercial: 0,
    cloudStorage: 10,
    compute: 7,
    staff: 45,
    total: 1862,
    staffCount: 5,
    note: 'Fastly 100% in-kind'
  },
  {
    registry: 'RubyGems',
    cdnDonation: 500,
    cdnCommercial: 0,
    cloudStorage: 20,
    compute: 0,
    staff: 50,
    total: 570,
    staffCount: 3,
    note: '$500K/month total'
  },
  {
    registry: 'Crates',
    cdnDonation: 200,
    cdnCommercial: 0,
    cloudStorage: 15,
    compute: 5,
    staff: 30,
    total: 250,
    staffCount: 3,
    note: 'AWS/Fastly donated'
  },
  {
    registry: 'npm',
    cdnDonation: 0,
    cdnCommercial: 150,
    cloudStorage: 100,
    compute: 200,
    staff: 200,
    total: 650,
    staffCount: 10,
    note: 'GitHub/Microsoft absorbed'
  },
  {
    registry: 'Maven',
    cdnDonation: 0,
    cdnCommercial: 300,
    cloudStorage: 50,
    compute: 100,
    staff: 100,
    total: 550,
    staffCount: 5,
    note: 'Sonatype (for-profit)'
  }
];

// Malware detection data
const malwareData = [
  { year: '2020', total: 50000, npmShare: 98.5, pypiShare: 1, otherShare: 0.5 },
  { year: '2021', total: 100000, npmShare: 98, pypiShare: 1.5, otherShare: 0.5 },
  { year: '2022', total: 200000, npmShare: 97, pypiShare: 2, otherShare: 1 },
  { year: '2023', total: 450000, npmShare: 98, pypiShare: 1.5, otherShare: 0.5 },
  { year: '2024', total: 704000, npmShare: 98.5, pypiShare: 1, otherShare: 0.5 },
  { year: '2025', total: 845000, npmShare: 97, pypiShare: 2, otherShare: 1 }
];

// Security features adoption
const securityFeatures = [
  { feature: '2FA/MFA', PyPI: 100, npm: 100, RubyGems: 80, Crates: 60, Maven: 40 },
  { feature: 'Trusted Publishing', PyPI: 85, npm: 70, RubyGems: 50, Crates: 40, Maven: 30 },
  { feature: 'Sigstore/Signing', PyPI: 60, npm: 75, RubyGems: 40, Crates: 50, Maven: 100 },
  { feature: 'Malware Scanning', PyPI: 90, npm: 85, RubyGems: 75, Crates: 70, Maven: 80 },
  { feature: 'SBOM Support', PyPI: 70, npm: 65, RubyGems: 55, Crates: 60, Maven: 75 }
];

// Timeline of major incidents
const incidentTimeline = [
  { year: 2020, event: 'SolarWinds', impact: 'Critical', description: '18,000+ customers affected via Orion updates' },
  { year: 2021, event: 'Log4Shell', impact: 'Critical', description: 'CVSS 10.0, hundreds of millions of devices' },
  { year: 2022, event: 'ua-parser-js', impact: 'High', description: 'Crypto miners in popular npm package' },
  { year: 2023, event: 'AI chatbot malware', impact: 'Medium', description: '1,700+ downloads across 30+ countries' },
  { year: 2024, event: 'XZ Utils', impact: 'Critical', description: 'Backdoor in Linux compression utility' },
  { year: 2025, event: 'Shai-Hulud', impact: 'High', description: 'First npm worm, 500+ packages infected' }
];

// Trusted Publishing adoption
const trustedPublishingData = [
  { date: 'Feb 2024', projects: 5000 },
  { date: 'May 2024', projects: 10000 },
  { date: 'Aug 2024', projects: 14000 },
  { date: 'Nov 2024', projects: 19000 },
  { date: 'Jan 2025', projects: 45000 }
];

// Foundation annual budget data (millions USD)
const foundationBudgetData = [
  { year: '2020', PSF: 2.2, RubyCentral: 0.3, RustFoundation: null, EstInfraCost: 15 },
  { year: '2021', PSF: 2.3, RubyCentral: 1.5, RustFoundation: 1.0, EstInfraCost: 18 },
  { year: '2022', PSF: 3.9, RubyCentral: 2.6, RustFoundation: 1.9, EstInfraCost: 20 },
  { year: '2023', PSF: 4.4, RubyCentral: 2.1, RustFoundation: 1.9, EstInfraCost: 22 },
  { year: '2024', PSF: 4.1, RubyCentral: 3.1, RustFoundation: 2.0, EstInfraCost: 25 }
];

// Funding gap data (annual, millions USD) - Fastly donates CDN to all three non-profit registries
const fundingGapData = [
  { registry: 'PyPI', budget: 4.4, fastlyCDN: 21.6, otherInfra: 0.2 },
  { registry: 'RubyGems', budget: 3.1, fastlyCDN: 6, otherInfra: 0.2 },
  { registry: 'Crates.io', budget: 1.9, fastlyCDN: 2.4, otherInfra: 0.2 }
];

// Gap analysis data
const gapAnalysisData = [
  { category: 'Growth Rate', value: 156, label: '156% YoY malware growth' },
  { category: 'Staff Gap', value: 85, label: '5-10 staff for trillion+ requests' },
  { category: 'Detection Time', value: 39, label: '39-hour median removal' },
  { category: 'Visibility', value: 20, label: 'Only 20% have full visibility' },
  { category: 'Unpatched', value: 80, label: '80% deps remain un-upgraded' }
];

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-gray-900 border border-gray-700 rounded-lg p-3 shadow-xl">
        <p className="text-gray-300 font-medium mb-1">{label}</p>
        {payload.map((entry, index) => (
          <p key={index} style={{ color: entry.color }} className="text-sm">
            {entry.name}: {typeof entry.value === 'number' ? entry.value.toLocaleString() : entry.value}
          </p>
        ))}
      </div>
    );
  }
  return null;
};

const StatCard = ({ title, value, subtitle, trend, color = 'blue' }) => (
  <div className="bg-gray-800 rounded-xl p-5 border border-gray-700 hover:border-gray-600 transition-colors">
    <p className="text-gray-400 text-sm font-medium mb-1">{title}</p>
    <p className={`text-3xl font-bold text-${color}-400 mb-1`}>{value}</p>
    <p className="text-gray-500 text-sm">{subtitle}</p>
    {trend && (
      <p className={`text-sm mt-2 ${trend > 0 ? 'text-red-400' : 'text-green-400'}`}>
        {trend > 0 ? '↑' : '↓'} {Math.abs(trend)}% YoY
      </p>
    )}
  </div>
);

const SectionHeader = ({ title, subtitle }) => (
  <div className="mb-6">
    <h2 className="text-2xl font-bold text-white mb-1">{title}</h2>
    <p className="text-gray-400">{subtitle}</p>
  </div>
);

export default function PackageEcosystemDashboard() {
  const [activeTab, setActiveTab] = useState('growth');

  const tabs = [
    { id: 'growth', label: 'Ecosystem Growth', icon: '📈' },
    { id: 'costs', label: 'Infrastructure Costs', icon: '💰' },
    { id: 'security', label: 'Security & Malware', icon: '🔒' },
    { id: 'gap', label: 'The Gap Analysis', icon: '⚠️' }
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Header */}
      <header className="bg-gradient-to-r from-blue-900 via-purple-900 to-red-900 py-8 px-6">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold mb-2">Open Source Package Ecosystem</h1>
          <p className="text-xl text-gray-300">Growth, Costs, and Security Challenges</p>
          <p className="text-sm text-gray-400 mt-2">Data compiled January 2025 • PyPI, npm, Crates.io, RubyGems, Maven Central</p>
        </div>
      </header>

      {/* Navigation */}
      <nav className="bg-gray-800 border-b border-gray-700 sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex space-x-1 py-2">
            {tabs.map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                  activeTab === tab.id
                    ? 'bg-blue-600 text-white'
                    : 'text-gray-400 hover:text-white hover:bg-gray-700'
                }`}
              >
                <span className="mr-2">{tab.icon}</span>
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-6 py-8">
        {/* Growth Tab */}
        {activeTab === 'growth' && (
          <div className="space-y-8">
            <SectionHeader
              title="Explosive Ecosystem Growth"
              subtitle="Package registries have grown exponentially, with npm now hosting 2M+ packages"
            />

            {/* Key Stats */}
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              <StatCard title="PyPI Packages" value="717K" subtitle="Python" color="blue" />
              <StatCard title="npm Packages" value="2M+" subtitle="JavaScript" color="red" />
              <StatCard title="Crates" value="210K" subtitle="Rust" color="orange" />
              <StatCard title="RubyGems" value="190K" subtitle="Ruby" color="red" />
              <StatCard title="Maven Artifacts" value="658K" subtitle="Java/JVM" color="pink" />
            </div>

            {/* Package Growth Chart */}
            <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
              <h3 className="text-lg font-semibold mb-4">Package Count Growth (2015-2025)</h3>
              <ResponsiveContainer width="100%" height={400}>
                <AreaChart data={packageGrowthData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                  <XAxis dataKey="year" stroke="#9CA3AF" />
                  <YAxis stroke="#9CA3AF" tickFormatter={(v) => `${(v/1000000).toFixed(1)}M`} />
                  <Tooltip content={<CustomTooltip />} />
                  <Legend />
                  <Area type="monotone" dataKey="npm" stackId="1" stroke={COLORS.npm} fill={COLORS.npm} fillOpacity={0.6} />
                  <Area type="monotone" dataKey="PyPI" stackId="1" stroke={COLORS.pypi} fill={COLORS.pypi} fillOpacity={0.6} />
                  <Area type="monotone" dataKey="Maven" stackId="1" stroke={COLORS.maven} fill={COLORS.maven} fillOpacity={0.6} />
                  <Area type="monotone" dataKey="Crates" stackId="1" stroke={COLORS.crates} fill={COLORS.crates} fillOpacity={0.6} />
                  <Area type="monotone" dataKey="RubyGems" stackId="1" stroke={COLORS.rubygems} fill={COLORS.rubygems} fillOpacity={0.6} />
                </AreaChart>
              </ResponsiveContainer>
            </div>

            {/* Downloads Comparison */}
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
                <h3 className="text-lg font-semibold mb-4">Monthly Downloads (Billions)</h3>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={downloadData} layout="vertical">
                    <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                    <XAxis type="number" stroke="#9CA3AF" />
                    <YAxis dataKey="registry" type="category" stroke="#9CA3AF" width={80} />
                    <Tooltip content={<CustomTooltip />} />
                    <Bar dataKey="downloads" radius={[0, 4, 4, 0]}>
                      {downloadData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
              </div>

              <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
                <h3 className="text-lg font-semibold mb-4">Monthly Bandwidth (Petabytes)</h3>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={bandwidthData} layout="vertical">
                    <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                    <XAxis type="number" stroke="#9CA3AF" />
                    <YAxis dataKey="registry" type="category" stroke="#9CA3AF" width={80} />
                    <Tooltip content={<CustomTooltip />} />
                    <Bar dataKey="bandwidth" radius={[0, 4, 4, 0]}>
                      {bandwidthData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* Key Insight Box */}
            <div className="bg-gradient-to-r from-blue-900/50 to-purple-900/50 rounded-xl p-6 border border-blue-700">
              <h3 className="text-lg font-semibold mb-2 flex items-center">
                <span className="mr-2">💡</span> Key Insight
              </h3>
              <p className="text-gray-300">
                PyPI alone serves <strong className="text-blue-400">747 petabytes annually</strong> at a sustained rate of 189 Gbps.
                That's equivalent to streaming <strong>62 million hours of HD video per month</strong>. npm handles
                <strong className="text-red-400"> 184 billion downloads monthly</strong> from its 2M+ packages.
              </p>
            </div>
          </div>
        )}

        {/* Costs Tab */}
        {activeTab === 'costs' && (
          <div className="space-y-8">
            <SectionHeader
              title="The Infrastructure Reality"
              subtitle="Running a package registry costs millions monthly—most rely on donated infrastructure"
            />

            {/* Cost Overview Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <StatCard title="PyPI CDN Value" value="$1.8M+" subtitle="Monthly (Fastly donation)" color="blue" />
              <StatCard title="RubyGems Total" value="$500K" subtitle="Monthly operations" color="red" />
              <StatCard title="Total Staff" value="~25" subtitle="Across all registries" color="purple" />
              <StatCard title="Requests/Staff" value="40B+" subtitle="Per staff member monthly" color="yellow" />
            </div>

            {/* Cost Breakdown Chart */}
            <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
              <h3 className="text-lg font-semibold mb-4">Monthly Cost Breakdown by Registry ($K)</h3>
              <ResponsiveContainer width="100%" height={400}>
                <BarChart data={costData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                  <XAxis dataKey="registry" stroke="#9CA3AF" />
                  <YAxis stroke="#9CA3AF" tickFormatter={(v) => `$${v}K`} />
                  <Tooltip content={<CustomTooltip />} />
                  <Legend />
                  <Bar dataKey="cdnDonation" name="CDN (Fastly donated)" stackId="a" fill="#3B82F6" />
                  <Bar dataKey="cdnCommercial" name="CDN (commercial)" stackId="a" fill="#6366F1" />
                  <Bar dataKey="cloudStorage" name="Cloud Storage" stackId="a" fill="#10B981" />
                  <Bar dataKey="compute" name="Compute" stackId="a" fill="#F59E0B" />
                  <Bar dataKey="staff" name="Staff" stackId="a" fill="#EF4444" />
                </BarChart>
              </ResponsiveContainer>
            </div>

            {/* Donation Dependency */}
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
                <h3 className="text-lg font-semibold mb-4">Infrastructure Dependencies</h3>
                <div className="space-y-4">
                  {[
                    { sponsor: 'Fastly', recipients: ['PyPI', 'RubyGems', 'Crates.io', 'Rust'], value: '$3M+/mo', type: 'CDN' },
                    { sponsor: 'AWS', recipients: ['PyPI', 'Crates.io'], value: '$100K+/mo', type: 'Compute' },
                    { sponsor: 'Google Cloud', recipients: ['PyPI'], value: '$10K/mo', type: 'Storage' },
                    { sponsor: 'Microsoft/GitHub', recipients: ['npm'], value: 'Absorbed', type: 'Full Stack' }
                  ].map((item, i) => (
                    <div key={i} className="flex items-center justify-between p-3 bg-gray-700/50 rounded-lg">
                      <div>
                        <p className="font-medium text-white">{item.sponsor}</p>
                        <p className="text-sm text-gray-400">{item.recipients.join(', ')}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-green-400 font-semibold">{item.value}</p>
                        <p className="text-xs text-gray-500">{item.type}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
                <h3 className="text-lg font-semibold mb-4">Staff per Registry</h3>
                <div className="space-y-3">
                  {costData.map((registry, i) => (
                    <div key={i} className="flex items-center">
                      <div className="w-24 text-gray-400">{registry.registry}</div>
                      <div className="flex-1 mx-3">
                        <div className="h-6 bg-gray-700 rounded-full overflow-hidden">
                          <div
                            className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-end pr-2"
                            style={{ width: `${(registry.staffCount / 10) * 100}%` }}
                          >
                            <span className="text-xs font-medium">{registry.staffCount}</span>
                          </div>
                        </div>
                      </div>
                      <div className="w-32 text-xs text-gray-500">{registry.note}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Foundation Annual Budgets */}
            <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
              <h3 className="text-lg font-semibold mb-2">Foundation Annual Budgets vs. Rising Operational Costs (2020-2024)</h3>
              <p className="text-sm text-gray-400 mb-4">Foundation budgets grow modestly while infrastructure costs (dashed line) scale with traffic</p>
              <ResponsiveContainer width="100%" height={350}>
                <LineChart data={foundationBudgetData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                  <XAxis dataKey="year" stroke="#9CA3AF" />
                  <YAxis stroke="#9CA3AF" tickFormatter={(v) => `$${v}M`} label={{ value: 'Annual Budget (Millions USD)', angle: -90, position: 'insideLeft', fill: '#9CA3AF', fontSize: 12 }} />
                  <Tooltip content={<CustomTooltip />} formatter={(value) => [`$${value}M`, '']} />
                  <Legend />
                  <Line type="monotone" dataKey="PSF" name="PSF Revenue" stroke={COLORS.pypi} strokeWidth={2} dot={{ fill: COLORS.pypi, strokeWidth: 2 }} connectNulls />
                  <Line type="monotone" dataKey="RubyCentral" name="Ruby Central" stroke={COLORS.rubygems} strokeWidth={2} dot={{ fill: COLORS.rubygems, strokeWidth: 2 }} connectNulls />
                  <Line type="monotone" dataKey="RustFoundation" name="Rust Foundation" stroke={COLORS.crates} strokeWidth={2} dot={{ fill: COLORS.crates, strokeWidth: 2 }} connectNulls />
                  <Line type="monotone" dataKey="EstInfraCost" name="Est. True Infra Cost (PyPI)" stroke="#94a3b8" strokeWidth={2} strokeDasharray="5 5" dot={false} />
                </LineChart>
              </ResponsiveContainer>
            </div>

            {/* Funding Gap */}
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
                <h3 className="text-lg font-semibold mb-2">The Funding Gap: Budget vs Donated Infrastructure</h3>
                <p className="text-sm text-gray-400 mb-4">Foundation budgets (blue) vs. Fastly CDN donations (green) + other infra (yellow)</p>
                <ResponsiveContainer width="100%" height={280}>
                  <BarChart data={fundingGapData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                    <XAxis dataKey="registry" stroke="#9CA3AF" />
                    <YAxis stroke="#9CA3AF" tickFormatter={(v) => `$${v}M`} />
                    <Tooltip content={<CustomTooltip />} formatter={(value) => [`$${value}M/year`, '']} />
                    <Legend />
                    <Bar dataKey="budget" name="Foundation Budget" fill="#3B82F6" />
                    <Bar dataKey="fastlyCDN" name="Fastly CDN Donation" fill="#10B981" />
                    <Bar dataKey="otherInfra" name="Other Infra (AWS, GCP)" fill="#F59E0B" />
                  </BarChart>
                </ResponsiveContainer>
              </div>

              <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
                <h3 className="text-lg font-semibold mb-4">Foundation Budget Breakdown (2023-2024)</h3>
                <div className="space-y-4">
                  {[
                    { name: 'Python Software Foundation', revenue: '$4.4M', expenses: '$4.5M', year: '2023', detail: 'PyCon: $1.8M, Grants: $677K', color: COLORS.pypi },
                    { name: 'Ruby Central', revenue: '$3.1M', expenses: '$2.9M', year: '2024', detail: '10x growth since 2020', color: COLORS.rubygems },
                    { name: 'Rust Foundation', revenue: '~$1.9M', expenses: '$400K+ grants', year: '2024', detail: '5 Platinum members', color: COLORS.crates },
                    { name: 'OpenJS Foundation', revenue: '€875K', expenses: 'STF Grant', year: '2023', detail: 'npm ecosystem support', color: '#F59E0B' }
                  ].map((item, i) => (
                    <div key={i} className="flex items-center justify-between p-3 bg-gray-700/50 rounded-lg">
                      <div>
                        <p className="font-medium text-white">{item.name}</p>
                        <p className="text-sm text-gray-400">Revenue: {item.revenue} | {item.expenses}</p>
                      </div>
                      <div className="text-right">
                        <p style={{ color: item.color }} className="font-semibold">{item.year}</p>
                        <p className="text-xs text-gray-500">{item.detail}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Key Insight Box */}
            <div className="bg-gradient-to-r from-yellow-900/50 to-red-900/50 rounded-xl p-6 border border-yellow-700">
              <h3 className="text-lg font-semibold mb-2 flex items-center">
                <span className="mr-2">⚠️</span> The Sustainability Crisis
              </h3>
              <p className="text-gray-300">
                Package registries serve <strong className="text-yellow-400">trillions of requests annually</strong> with
                teams of just <strong>5-10 people</strong>. Without donations from Fastly, AWS, and Google Cloud worth
                <strong className="text-red-400"> $50M+ annually</strong>, the open source ecosystem would collapse.
                Maven Central now implements <strong>rate limiting</strong> because 83% of bandwidth comes from just 1% of IPs.
              </p>
            </div>
          </div>
        )}

        {/* Security Tab */}
        {activeTab === 'security' && (
          <div className="space-y-8">
            <SectionHeader
              title="The Security Arms Race"
              subtitle="Malware growth outpaces security investment—registries are playing catch-up"
            />

            {/* Security Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <StatCard title="Malicious Packages" value="845K+" subtitle="Detected since 2019" color="red" trend={156} />
              <StatCard title="npm Malware Share" value="98.5%" subtitle="Of all detected" color="red" />
              <StatCard title="Median Removal" value="39h" subtitle="Time to remove malware" color="yellow" />
              <StatCard title="2FA Adoption" value="80%+" subtitle="PyPI users (mandated)" color="green" />
            </div>

            {/* Malware Growth Chart */}
            <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
              <h3 className="text-lg font-semibold mb-4">Cumulative Malicious Packages Detected</h3>
              <ResponsiveContainer width="100%" height={350}>
                <AreaChart data={malwareData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                  <XAxis dataKey="year" stroke="#9CA3AF" />
                  <YAxis stroke="#9CA3AF" tickFormatter={(v) => `${(v/1000).toFixed(0)}K`} />
                  <Tooltip content={<CustomTooltip />} />
                  <Area type="monotone" dataKey="total" stroke="#EF4444" fill="#EF4444" fillOpacity={0.3} name="Total Malicious" />
                </AreaChart>
              </ResponsiveContainer>
            </div>

            {/* Security Features Radar & Timeline */}
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
                <h3 className="text-lg font-semibold mb-4">Security Feature Adoption (%)</h3>
                <ResponsiveContainer width="100%" height={350}>
                  <RadarChart data={securityFeatures}>
                    <PolarGrid stroke="#374151" />
                    <PolarAngleAxis dataKey="feature" stroke="#9CA3AF" tick={{ fill: '#9CA3AF', fontSize: 11 }} />
                    <PolarRadiusAxis angle={30} domain={[0, 100]} stroke="#9CA3AF" />
                    <Radar name="PyPI" dataKey="PyPI" stroke={COLORS.pypi} fill={COLORS.pypi} fillOpacity={0.3} />
                    <Radar name="npm" dataKey="npm" stroke={COLORS.npm} fill={COLORS.npm} fillOpacity={0.3} />
                    <Radar name="Maven" dataKey="Maven" stroke={COLORS.maven} fill={COLORS.maven} fillOpacity={0.3} />
                    <Legend />
                  </RadarChart>
                </ResponsiveContainer>
              </div>

              <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
                <h3 className="text-lg font-semibold mb-4">Major Supply Chain Incidents</h3>
                <div className="space-y-3 overflow-y-auto max-h-[350px]">
                  {incidentTimeline.map((incident, i) => (
                    <div key={i} className="flex items-start p-3 bg-gray-700/50 rounded-lg">
                      <div className={`w-2 h-2 mt-2 rounded-full mr-3 ${
                        incident.impact === 'Critical' ? 'bg-red-500' :
                        incident.impact === 'High' ? 'bg-orange-500' : 'bg-yellow-500'
                      }`} />
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <span className="font-medium text-white">{incident.event}</span>
                          <span className="text-xs text-gray-500">{incident.year}</span>
                        </div>
                        <p className="text-sm text-gray-400 mt-1">{incident.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Trusted Publishing Adoption */}
            <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
              <h3 className="text-lg font-semibold mb-4">Trusted Publishing Adoption (PyPI)</h3>
              <ResponsiveContainer width="100%" height={250}>
                <LineChart data={trustedPublishingData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                  <XAxis dataKey="date" stroke="#9CA3AF" />
                  <YAxis stroke="#9CA3AF" tickFormatter={(v) => `${(v/1000).toFixed(0)}K`} />
                  <Tooltip content={<CustomTooltip />} />
                  <Line type="monotone" dataKey="projects" stroke="#10B981" strokeWidth={3} dot={{ fill: '#10B981', strokeWidth: 2 }} name="Projects" />
                </LineChart>
              </ResponsiveContainer>
              <p className="text-sm text-gray-400 mt-3">
                Trusted Publishing eliminates API tokens by using OIDC with CI/CD providers. Adoption grew from 10% to 45,000 projects in under a year.
              </p>
            </div>

            {/* Key Insight Box */}
            <div className="bg-gradient-to-r from-red-900/50 to-orange-900/50 rounded-xl p-6 border border-red-700">
              <h3 className="text-lg font-semibold mb-2 flex items-center">
                <span className="mr-2">🚨</span> The Security Reality
              </h3>
              <p className="text-gray-300">
                Malicious packages increased <strong className="text-red-400">156% in 2024</strong> alone—that's
                <strong> 1,400+ new malicious packages published daily</strong>. npm accounts for 98.5% of all detected malware.
                Despite mandatory 2FA and Trusted Publishing, the median time to remove malware is still <strong className="text-yellow-400">39 hours</strong>.
                The first self-replicating worm (Shai-Hulud) infected 500+ npm packages in 2025.
              </p>
            </div>
          </div>
        )}

        {/* Gap Analysis Tab */}
        {activeTab === 'gap' && (
          <div className="space-y-8">
            <SectionHeader
              title="The Growing Gap"
              subtitle="Resources aren't keeping pace with growth, attacks, or expectations"
            />

            {/* The Three Trends Visual */}
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-gradient-to-b from-green-900/50 to-gray-800 rounded-xl p-6 border border-green-700">
                <div className="text-4xl mb-3">📈</div>
                <h3 className="text-xl font-bold text-green-400 mb-2">Ecosystem Growth</h3>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li>• 47% CAGR in packages (15 years)</li>
                  <li>• 2M+ npm, 717K+ PyPI packages</li>
                  <li>• 747 PB/year bandwidth (PyPI alone)</li>
                  <li>• 1.4 trillion Maven requests/year</li>
                </ul>
                <div className="mt-4 text-3xl font-bold text-green-400">↑ Exponential</div>
              </div>

              <div className="bg-gradient-to-b from-red-900/50 to-gray-800 rounded-xl p-6 border border-red-700">
                <div className="text-4xl mb-3">💰</div>
                <h3 className="text-xl font-bold text-red-400 mb-2">Infrastructure Investment</h3>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li>• ~25 staff total across registries</li>
                  <li>• 80%+ costs are donated</li>
                  <li>• $6M/year RubyGems operations</li>
                  <li>• Rate limiting being introduced</li>
                </ul>
                <div className="mt-4 text-3xl font-bold text-red-400">→ Flat/Linear</div>
              </div>

              <div className="bg-gradient-to-b from-purple-900/50 to-gray-800 rounded-xl p-6 border border-purple-700">
                <div className="text-4xl mb-3">🔒</div>
                <h3 className="text-xl font-bold text-purple-400 mb-2">Security Expectations</h3>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li>• SBOM mandates (Executive Orders)</li>
                  <li>• Real-time malware scanning</li>
                  <li>• Trusted Publishing/Sigstore</li>
                  <li>• 82% expect secure-by-design</li>
                </ul>
                <div className="mt-4 text-3xl font-bold text-purple-400">↑ Step Function</div>
              </div>
            </div>

            {/* Gap Metrics */}
            <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
              <h3 className="text-lg font-semibold mb-4">The Gap in Numbers</h3>
              <div className="grid md:grid-cols-5 gap-4">
                {gapAnalysisData.map((item, i) => (
                  <div key={i} className="text-center p-4 bg-gray-700/50 rounded-lg">
                    <div className="text-3xl font-bold text-yellow-400">{item.value}%</div>
                    <div className="text-sm text-gray-400 mt-1">{item.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Comparison Timeline */}
            <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
              <h3 className="text-lg font-semibold mb-4">10-Year Comparison</h3>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-gray-700">
                      <th className="text-left py-3 px-4 text-gray-400">Metric</th>
                      <th className="text-right py-3 px-4 text-gray-400">2015</th>
                      <th className="text-right py-3 px-4 text-gray-400">2025</th>
                      <th className="text-right py-3 px-4 text-gray-400">Change</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { metric: 'Total Packages (all registries)', v2015: '~400K', v2025: '~4M', change: '+900%' },
                      { metric: 'Monthly Downloads (PyPI)', v2015: '~500M', v2025: '83.6B', change: '+16,620%' },
                      { metric: 'Monthly Bandwidth (PyPI)', v2015: '~5 PB', v2025: '62 PB', change: '+1,140%' },
                      { metric: 'Registry Staff (all)', v2015: '~10', v2025: '~25', change: '+150%' },
                      { metric: 'Malicious Packages/Year', v2015: '~100', v2025: '~300K', change: '+299,900%' },
                      { metric: 'Security Features Required', v2015: '1 (email)', v2025: '6+ (2FA, SBOM, etc)', change: '+500%' }
                    ].map((row, i) => (
                      <tr key={i} className="border-b border-gray-700/50">
                        <td className="py-3 px-4 text-white">{row.metric}</td>
                        <td className="py-3 px-4 text-right text-gray-400">{row.v2015}</td>
                        <td className="py-3 px-4 text-right text-blue-400">{row.v2025}</td>
                        <td className="py-3 px-4 text-right text-red-400 font-semibold">{row.change}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Call to Action */}
            <div className="bg-gradient-to-r from-blue-900 via-purple-900 to-red-900 rounded-xl p-8 border border-purple-500">
              <h3 className="text-2xl font-bold mb-4">The Bottom Line</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <p className="text-gray-300 mb-4">
                    Package registries are critical infrastructure serving <strong className="text-white">trillions of requests</strong> with
                    teams smaller than a typical startup. Growth has been <strong className="text-green-400">10-100x</strong> while
                    staffing increased only <strong className="text-red-400">2.5x</strong>.
                  </p>
                  <p className="text-gray-300">
                    Meanwhile, security expectations have shifted from "nice to have" to <strong className="text-purple-400">government mandates</strong>.
                    Without significant investment, we're building trillion-dollar businesses on infrastructure held together by
                    <strong className="text-yellow-400"> donations and goodwill</strong>.
                  </p>
                </div>
                <div className="bg-black/30 rounded-lg p-4">
                  <h4 className="font-semibold mb-2 text-white">Key Questions for the Community</h4>
                  <ul className="space-y-2 text-sm text-gray-300">
                    <li>1. How do we sustainably fund registry infrastructure?</li>
                    <li>2. Should security be opt-in or mandatory?</li>
                    <li>3. Who bears the cost of compliance (SBOM, attestation)?</li>
                    <li>4. Can we achieve sub-1-hour malware removal?</li>
                    <li>5. What happens when donations end?</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 border-t border-gray-700 py-6 px-6 mt-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm">
              <p>Data sources: PSF Annual Reports, Sonatype State of Software Supply Chain, PyPI Blog, npm Blog, Ruby Central, Rust Foundation</p>
            </div>
            <div className="text-gray-500 text-sm mt-2 md:mt-0">
              Created January 2025 • Interactive Dashboard for Conference Presentation
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
