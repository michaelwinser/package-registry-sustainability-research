# Prompts for Package Ecosystem Dashboard

A collection of prompts used to create an interactive dashboard comparing open source package registry growth, costs, and security challenges.

---

## 1. Initial Request

> I'd like to create some visuals to compare a few trends:
>
> 1. The growth of open source package ecosystems (packages, versions, updates, downloads, bandwidth, malware)
> 2. The underlying costs associated with operating the registries for PyPI, Crates, RubyGems, and Maven Central (infrastructure and staffing)
> 3. The increased expectations of security-related features (malware scanning, Trusted Publishing, code signing)

**Follow-up clarifications provided:**
- Format: Interactive HTML dashboard
- Audience: Open source community/conference talk
- Depth: Thorough analysis with multiple sources

---

## 2. Foundation Budget Comparison

> Please add a graph that shows the annual budgets of the foundations over the past 5 years. I want to compare that to rising costs of operations.

---

## 3. Data Corrections

### Rust Foundation EIN Correction
> I think you're looking at the wrong Rust Foundation. Look at this one: https://projects.propublica.org/nonprofits/organizations/854376974

### Fastly CDN Donations
> Fastly is donating credits (used for CDN) to all three of PyPI, RubyGems, and Crates

### Maven/Sonatype Distinction
> Maven does not receive donated CDN from Fastly because Maven is operated by a for-profit company: Sonatype

> The Monthly Cost Breakdown by Registry still shows Maven as receiving CDN (donated). While it's OK to show CDN costs (estimated) for the privately-held registries npm and Maven Central, they should not be attributed to CDN donations from Fastly.

---

## 4. Hidden Gaps Analysis

> There are two gaps that won't show up well in the published numbers: the volunteer hours and the security work that is not being done because of insufficient resources. Can you help with that?

### Security Funding Sources
> Also, the security work that is being done in the non-profit registries is almost entirely funded by Alpha-Omega and, to a lesser extent, the Sovereign Tech Fund.

### Grant Dependency Risk
> These donations are not part of the normal recurring sponsorships or 'membership' revenue for the foundations. They are far from guaranteed.

---

## 5. OpenSSF Security Framework

> Can you look at the Securing Software Repos guidance published by the OpenSSF working group and add that to the analysis of security work by each registry?

---

## Key Data Sources Referenced

- **IRS 990 filings**: ProPublica Nonprofit Explorer for foundation budgets
- **PyPI Stats**: Linehaul data, PyPI blog posts
- **Sonatype**: State of Software Supply Chain reports
- **Alpha-Omega**: OpenSSF grant announcements
- **Sovereign Tech Fund**: German government grant disclosures
- **OpenSSF**: Principles for Package Repository Security framework
- **Tidelift**: Maintainer surveys (volunteer labor, burnout statistics)
- **Harvard/Linux Foundation**: Economic value studies

---

## Output Files Generated

1. `package-ecosystem-dashboard.html` - Interactive HTML dashboard with 5 tabs
2. `package-ecosystem-dashboard.jsx` - React component version
3. `data-sources.md` - Comprehensive documentation of all data sources

---

## Tips for Reuse

1. **Be specific about corrections** - When data is wrong, provide the correct source (e.g., specific EIN, specific company relationships)

2. **Distinguish ownership models** - Non-profit vs. for-profit registries have very different funding structures

3. **Highlight what's hidden** - Published numbers don't show volunteer labor, grant dependency, or unfunded work

4. **Reference frameworks** - Using established frameworks (like OpenSSF) adds credibility and structure

5. **Layer the analysis** - Start with visible metrics, then add context about what's missing or at risk
