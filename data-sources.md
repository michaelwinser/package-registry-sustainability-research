# Package Ecosystem Dashboard - Data Sources & Methodology

## Overview
This document provides sources and methodology for all data points used in the Package Ecosystem Dashboard, compiled January 2025.

---

## 1. Package Count Data

| Registry | Count | Source |
|----------|-------|--------|
| PyPI | 717,191 packages | [PyPI Stats](https://pypi.org/stats/), October 2025 |
| npm | 2M+ packages | [npm Registry Stats](https://www.npmjs.com/), 2025 |
| Crates.io | 210,085 crates | [lib.rs statistics](https://lib.rs/stats), October 2025 |
| RubyGems | ~190,000 gems | [RubyGems.org stats](https://stats.rubygems.org/) |
| Maven Central | 658,078 artifacts | [Maven Central Stats](https://search.maven.org/stats), August 2024 |

---

## 2. Download & Bandwidth Metrics

### PyPI
- **Monthly Downloads**: 83.6 billion (September 2025)
- **Annual Bandwidth**: 747.4 petabytes (2023)
- **Sustained Bandwidth**: 189.6 Gbps
- **Sources**:
  - [2023 PSF Annual Impact Report](https://lwn.net/Articles/972596/)
  - [PyPI Usage Report: September 2025](https://clickpy.clickhouse.com/report/september-2025.html)

### npm
- **Monthly Downloads**: 184 billion (end of 2023)
- **Monthly Requests**: 125 billion
- **Monthly Bandwidth**: 6 petabytes
- **Sources**:
  - [npm Registry in Numbers](https://www.futurice.com/blog/npm-registry-in-numbers)
  - [Socket.dev - 2023 npm Retrospective](https://socket.dev/blog/2023-npm-retrospective)

### RubyGems
- **Monthly Downloads**: 4.15 billion (April 2025)
- **Monthly Bandwidth**: 5.66 petabytes (March 2025)
- **Monthly Requests**: 51.28 billion
- **Sources**:
  - [April 2025 RubyGems Updates](https://blog.rubygems.org/2025/05/20/april-rubygems-updates.html)
  - [Ruby Central Infrastructure](https://rubycentral.org/news/ruby-centrals-infrastructure-improvements-for-rubygems-org/)

### Crates.io
- **Daily Downloads**: 507.6 million
- **Monthly Bandwidth**: ~2.34 PB (static + index)
- **Sources**:
  - [lib.rs statistics](https://lib.rs/stats)
  - [crates.io development update](https://blog.rust-lang.org/2026/01/21/crates-io-development-update/)

### Maven Central
- **Annual Requests**: ~1.4 trillion (2024 estimate)
- **Annual Downloads**: 6.6+ trillion across ecosystem
- **Sources**:
  - [Sonatype - Tragedy of the Commons](https://www.sonatype.com/blog/maven-central-and-the-tragedy-of-the-commons)
  - [Sonatype 2024 Report](https://www.sonatype.com/state-of-the-software-supply-chain/2024)

---

## 3. Infrastructure Cost Data

### PyPI
- **CDN (Fastly)**: $1.8M+/month (100% donated)
- **Google Cloud Storage**: ~$10,000/month (donated)
- **AWS**: ~$7,000/month (promotional credits)
- **Staff**: 5 FTE (Director of Infrastructure, Support Specialist, Safety & Security Engineer, Infrastructure Engineer, Security Developer in Residence)
- **Sources**:
  - [Dustin Ingram - Powering PyPI (2021)](https://dustingram.com/articles/2021/04/14/powering-the-python-package-index-in-2021/)
  - [PSF Annual Report 2024](https://www.python.org/psf/annual-report/2024/)

### RubyGems
- **Total Operations**: ~$500,000/month
- **Fastly Partnership**: $500K+ over 5 years (in-kind)
- **Staff**: Part-time developers + 24/7 on-call
- **Sources**:
  - [Ruby Central Funding Model](https://rubycentral.org/news/rubygems-org-funding-model-a-new-path-for-community-led-growth/)
  - [Ruby Central Partnership with Fastly](https://rubycentral.org/news/announcing-ruby-centrals-partnership-with-fastly-enhancing-performance-stability-for-open-source-tools/)

### Crates.io
- **Infrastructure**: AWS (donated), Fastly (donated)
- **Staff**: Rust Foundation Infrastructure Team
- **Sources**:
  - [10 Years of Stable Rust](https://rustfoundation.org/media/10-years-of-stable-rust-an-infrastructure-story/)
  - [Fastly + Rust Foundation](https://www.fastly.com/customers/rust-foundation)

### npm
- **Status**: Absorbed by GitHub/Microsoft (2020 acquisition)
- **Staff**: Engineering team (estimate ~10)
- **Sources**:
  - [RedMonk - Is npm Enough?](https://redmonk.com/kholterhoff/2025/01/30/is-npm-enough/)

### Maven Central
- **Operator**: Sonatype (for-profit company) - **does not receive Fastly CDN donations**
- **Infrastructure**: Self-funded commercial operation
- **Challenges**: 83% of bandwidth consumed by 1% of IPs; implementing rate limiting
- **Staff**: Technical operations team managed by Sonatype
- **Sources**:
  - [Maven Central - Tragedy of the Commons](https://www.sonatype.com/blog/maven-central-and-the-tragedy-of-the-commons)
  - [Maven Central Rate Limits](https://central.sonatype.org/news/)

---

## 3.5. Foundation Annual Budgets (IRS 990 Data)

### Python Software Foundation (EIN: 04-3594598)
| Year | Revenue | Expenses | Net |
|------|---------|----------|-----|
| 2020 | $2.2M | $1.8M | +$0.4M |
| 2021 | $2.3M | $1.7M | +$0.6M |
| 2022 | $3.9M | $3.4M | +$0.5M |
| 2023 | $4.4M | $4.5M | -$0.1M |
| 2024 | $4.1M | $5.8M | -$1.7M |

- **Key Expenses (2023)**: PyCon US ($1.8M), Grants ($677K), Infrastructure/PyPI ($286K)
- **Sources**:
  - [ProPublica Nonprofit Explorer - PSF](https://projects.propublica.org/nonprofits/organizations/43594598)
  - [2023 PSF Annual Impact Report](https://www.python.org/psf/annual-report/2023/)
  - [PSF Public Records](https://www.python.org/psf/records/)

### Ruby Central (EIN: 30-0040446)
| Year | Revenue | Expenses | Net |
|------|---------|----------|-----|
| 2020 | $0.3M | - | - |
| 2021 | $1.5M | $1.3M | +$0.2M |
| 2022 | $2.6M | $2.8M | -$0.3M |
| 2023 | $2.1M | $2.2M | -$0.1M |
| 2024 | $3.1M | $2.9M | +$0.2M |

- **Key Funding**: Shopify ($1M over 4 years), Alpha-Omega ($250K grant)
- **Sources**:
  - [ProPublica Nonprofit Explorer - Ruby Central](https://projects.propublica.org/nonprofits/organizations/300040446)
  - [Ruby Central Funding Model](https://rubycentral.org/news/rubygems-org-funding-model-a-new-path-for-community-led-growth/)

### Rust Foundation (EIN: 85-4376974)
| Year | Revenue | Notes |
|------|---------|-------|
| 2021 | $1.0M+ | Founded Feb 2021 with 5 Platinum members |
| 2022 | $1.9M | Budget year per FOSS Foundations Directory |
| 2023 | ~$1.9M | Grants: $304K (88 awards) |
| 2024 | ~$2.0M | Grants: $400K+, 15 new members |

- **Platinum Members**: AWS, Google, Huawei, Meta, Microsoft
- **Sources**:
  - [ProPublica Nonprofit Explorer - Rust Foundation](https://projects.propublica.org/nonprofits/organizations/854376974)
  - [FOSS Foundations Directory - Rust](https://fossfoundation.info/foundations/rust)
  - [Rust Foundation 2024 Annual Report Preview](https://rustfoundation.org/media/2024-in-review-rust-foundation-annual-report-preview/)

### OpenJS Foundation
- **2023 Grant**: €875K (~$902K) from Germany's Sovereign Tech Fund
- **Structure**: Part of Linux Foundation, 30+ corporate members
- **Sources**:
  - [OpenJS Foundation - Sovereign Tech Fund](https://linuxfoundation.eu/newsroom/stf-openjs)

---

## 4. Malware Statistics

### Cumulative Detections
- **Total since 2019**: 845,204 packages (Q2 2025)
- **2024 alone**: 704,102 packages identified
- **YoY increase**: 156% (2024)
- **npm share**: 98.5% of all malware
- **Sources**:
  - [Sonatype 10th Annual Report](https://www.sonatype.com/state-of-the-software-supply-chain/2024)
  - [Sonatype Q2 2025 Open Source Malware Index](https://www.sonatype.com/blog/open-source-malware-index-q2-2025)

### Notable Incidents
| Incident | Year | Impact |
|----------|------|--------|
| SolarWinds | 2020 | 18,000+ customers |
| Log4Shell | 2021 | CVSS 10.0, billions of devices |
| XZ Utils | 2024 | Critical Linux infrastructure |
| Shai-Hulud | 2025 | First npm worm, 500+ packages |

- **Sources**:
  - [Palo Alto Unit 42 - SolarStorm Timeline](https://unit42.paloaltonetworks.com/solarstorm-supply-chain-attack-timeline/)
  - [CISA - Log4j Guidance](https://www.cisa.gov/news-events/news/apache-log4j-vulnerability-guidance)
  - [Wiz Blog - Shai-Hulud](https://www.wiz.io/blog/shai-hulud-2-0-ongoing-supply-chain-attack)

---

## 5. Security Feature Adoption

### 2FA/MFA
- **PyPI**: Mandatory since January 1, 2024 (80%+ adoption)
- **npm**: Mandatory via GitHub login
- **RubyGems**: Required for gems with >180M cumulative downloads
- **Sources**:
  - [PyPI 2FA Enforcement](https://blog.pypi.org/posts/2023-12-13-2fa-enforcement/)
  - [npm 2FA Documentation](https://docs.npmjs.com/requiring-2fa-for-package-publishing-and-settings-modification/)
  - [RubyGems MFA Guide](https://guides.rubygems.org/setting-up-multifactor-authentication/)

### Trusted Publishing
- **PyPI Projects**: 45,000+ (January 2025)
- **Growth**: From ~5,000 (Feb 2024) to 45,000 (Jan 2025)
- **Sources**:
  - [PyPI Blog - Trusted Publishers Growing](https://blog.pypi.org/posts/2025-11-10-trusted-publishers-coming-to-orgs/)
  - [OpenSSF Guide for Package Repositories](https://openssf.org/blog/2024/08/05/new-guide-for-package-repositories-to-adopt-trusted-publishers/)

### SBOM Requirements
- **Executive Order 14028**: Mandates SBOM for federal software
- **Industry Adoption**: 78% plan to increase SBOM use (Anchore 2024)
- **Sources**:
  - [CISA SBOM Page](https://www.cisa.gov/sbom)
  - [Anchore 2024 Survey](https://anchore.com/blog/anchore-survey-2024-only-1-in-5-organizations-have-full-visibility-of-open-source/)

---

## 6. Industry Surveys

### GitHub Open Source Survey 2024
- 82% consider secure-by-design important
- 62% prioritize security when contributing
- **Source**: [GitHub Open Source Survey 2024](https://opensourcesurvey.org/2024/)

### Anchore 2024 Survey
- Only 1 in 5 organizations have full OSS visibility
- 78% plan to increase SBOM adoption
- **Source**: [Anchore Survey 2024](https://anchore.com/press/anchore-survey-shows-only-1-in-5-organizations-have-full-visibility-into-their-open-source-software-components/)

---

## 7. Security Funding Sources (Alpha-Omega & Sovereign Tech Fund)

**Critical Note**: Almost all security work in non-profit registries is funded by these time-limited grants, NOT from foundation operating budgets.

### Alpha-Omega Grants (OpenSSF)

| Registry | Amount | Duration | What It Funds |
|----------|--------|----------|---------------|
| PyPI/PSF | $1.3M+ | 2023-2025 | Security Developer in Residence, Sigstore, SBOMs, audits |
| Ruby Central | $950K | 2024-2025 | Security Engineer in Residence, Trusted Publishing |
| Rust Foundation | $911K+ | 2024-2025 | Malware scanning, build provenance, SLSA compliance |
| OpenJS | $580K | 2024 | JavaScript ecosystem security, Node.js hardening |

- **Sources**:
  - [Alpha-Omega 2024 Annual Report](https://alpha-omega.dev/wp-content/uploads/sites/22/2025/01/Alpha-Omega-Annual-Report-2024_012925.pdf)
  - [Alpha-Omega Grant Recipients](https://alpha-omega.dev/grants/grantrecipients/)
  - [Ruby Central Alpha-Omega Announcement](https://rubycentral.org/news/ruby-central-receives-alpha-omega-grant/)

### Sovereign Tech Fund Grants

| Registry | Amount | Status |
|----------|--------|--------|
| OpenJS Foundation | €875K | Concluded 2024 |
| PyPI/Python ecosystem | €1.06M | Time-limited |
| RubyGems & Bundler | €668K | Time-limited |

- **Sources**:
  - [Sovereign Tech Fund - OpenJS](https://linuxfoundation.eu/newsroom/stf-openjs)
  - [Sovereign Tech Agency](https://www.sovereign.tech/programs/fund)

---

## 8. Volunteer Labor & Maintainer Statistics

### Maintainer Payment Status (Tidelift 2024 Survey)
- **60%** unpaid hobbyist maintainers
- **24%** semi-professional maintainers
- **12%** earn most/all income from OSS
- **60%** have quit or considered quitting

### Economic Value (Harvard Business School 2024)
- **Supply-side value**: $4.2 billion (cost to replicate)
- **Demand-side value**: $8.8 trillion (replacement cost to firms)
- **Key finding**: 5% of programmers created 90% of the value

### Burnout Statistics
- **44%** explicitly report burnout
- **48%** feel under-appreciated
- **3x** more time spent on security than a few years ago

- **Sources**:
  - [Tidelift 2024 State of Open Source Maintainer Report](https://www.tidelift.com/open-source-maintainer-survey-2024)
  - [Harvard Business School - The Value of Open Source Software](https://www.hbs.edu/faculty/Pages/item.aspx?num=65230)
  - [Linux Foundation - Open Source Maintainers Survey](https://www.linuxfoundation.org/research/open-source-maintainers)

---

## 9. Unfunded Security Work

### Security Capabilities NOT Being Funded

| Capability | Status | Barrier | Est. Cost |
|------------|--------|---------|-----------|
| 24/7 Malware Detection (ML/AI) | ❌ Not funded | Requires ML ops team | $500K-2M/yr |
| 24/7 Incident Response Team | ❌ Not funded | No on-call rotation | $300K-500K/yr |
| Recurring Security Audits | ⚠️ One-time only | Grant-funded, don't recur | $50K-300K/audit |
| Full Build Provenance | ⚠️ Partial | Only ~5% adoption | $100K-500K |
| Reproducible Builds Verification | ❌ Not funded | Requires rebuild infra | $200K+ |

### Key Gaps
- No registry has documented 24/7 incident response team
- Malware detection relies on community reports, not proactive scanning
- Security audits are one-time events, not continuous improvement

- **Sources**:
  - [OpenSSF - Open Infrastructure is Not Free](https://openssf.org/blog/2025/09/23/open-infrastructure-is-not-free-a-joint-statement-on-sustainable-stewardship/)
  - [OpenSSF Principles for Package Repository Security](https://repos.openssf.org/principles-for-package-repository-security.html)
  - [RubyGems.org Funding Model](https://rubycentral.org/news/rubygems-org-funding-model-a-new-path-for-community-led-growth/)

---

## Methodology Notes

1. **Data Recency**: All data points use the most recent available figures as of January 2025. Some metrics (particularly download counts) fluctuate significantly month-to-month.

2. **Cost Estimates**: Infrastructure costs for npm and Maven Central are estimates based on available information, as these organizations don't publicly disclose detailed budgets.

3. **Staff Counts**: Staff numbers represent dedicated registry operations personnel and may not include broader organization support staff.

4. **Malware Statistics**: Detection numbers come from security vendors (primarily Sonatype) and may not capture all malicious packages across all registries.

5. **Growth Calculations**: Historical package counts are approximate, as not all registries maintain detailed historical records.

---

## Dashboard Files
- **Interactive HTML**: `package-ecosystem-dashboard.html`
- **React Component**: `package-ecosystem-dashboard.jsx`
- **This Document**: `data-sources.md`

---

*Last updated: January 29, 2025*
