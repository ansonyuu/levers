export const FAQContent = [
  {
    prefix: "01",
    question: "Isn’t this very hard?",
    answer: (
      <div className="pl-10 w-2/3">
        <p className="text-white text-sm">Yes.</p>
      </div>
    )
  },
  {
    prefix: "02",
    question: "Doesn’t this take a lot of money? Where does it come from?",
    answer: (
      <div className="pl-10 w-2/3">
        <p className="text-white text-sm">
          Physical research is expensive — we expect a single five year program
          to cost approximately $10M. If these programs are actually high-risk
          (say, a 10% chance of success) it will cost $70M over at least five
          years to run enough programs to have a 50% chance of a single success.{" "}
          <br />
          <br />
          These numbers are large in an absolute sense, they are cheap compared
          to other research funding: 0.2% of the{" "}
          <a
            href="https://www.nsf.gov/about/congress/119/highlights/cu22.jsp"
            target="_blank"
          >
            NSF’s budget
          </a>
          , 0.04% of the{" "}
          <a
            target="_blank"
            href="https://physicsworld.com/a/us-philanthropic-organisations-spend-over-30bn-a-year-on-science/"
          >
            philanthropic dollars spent on science per year
          </a>
          , and 0.001% of the{" "}
          <a
            target="_blank"
            href="https://www.bakerinstitute.org/research/us-federal-scientific-research-and-development-budget-overview-and-outlook"
          >
            amount spent by the US government on R&D
          </a>
          . <br />
          <br />
          In version 1.0 we are depending on donations from foundations and
          individuals. In the long run, we’re exploring several options that
          could bring in more consistent funding and hopefully make us
          autocatalytic. While it is far from our core goal, the best way to get
          some of our technology into the world will be through licensed IP or
          spun-out startups. Another approach is to build a research consortium
          similar to the Semiconductor Research Corporation.
        </p>
      </div>
    )
  },
  {
    prefix: "03",
    question: "Isn’t speculative research the government’s job?",
    answer: (
      <div className="pl-10 w-2/3">
        {" "}
        <p className="text-white text-sm">
          Government-funded research has resulted in many breakthroughs and we
          are certainly not trying to replace it! However, like any
          institutional structure, government research has constraints.
          Specifically, government research in a democracy faces a fundamental
          tension: taxpayers want governments to be responsible with their
          money, but great research requires speculative bets. We can take risks
          without leaving the taxpayer on the hook for it.
          <br /> <br />
          There’s no “natural” role for governments to do research. While
          governments funding the majority of research is just “the way things
          work” today, that has only been the case for less than a century.{" "}
          <br />
          <br />
          More broadly, no single institution can support all eventually-good
          ideas. Institutional pluralism is important so that ideas that fall
          outside of that institution’s constraints have a home.
        </p>
      </div>
    )
  },
  {
    prefix: "04",
    question: "Why are you a nonprofit?",
    answer: (
      <div className="pl-10 w-2/3">
        <p className="text-white text-sm">
          One might expect an organization that creates valuable technology to
          be structured around capturing that technology’s value. There are many
          examples of startups or incubators that have successfully created
          technologies and brought them to market. Profit also creates a tight
          feedback loop and makes organizations auto-catalyzing. <br /> <br />{" "}
          Despite these advantages, we are structured as a nonprofit because it
          is structurally hard to capture value from the systems-research style
          work we do and by setting out to capture the value we create, we
          believe we would ultimately hamstring the technologies. <br />
          <br />
          Furthermore, even if DARPA could capture a{" "}
          <a
            target="_blank"
            href="https://docs.google.com/spreadsheets/d/1zI_Q2Sx6OduWOXkVzCTjcr2FGA-_83eK3y7LKpQzJdY/edit?usp=sharing"
          >
            1% fraction of the value of the entire internet
          </a>
          , it would not have a positive return. We believe that brutal honesty
          is the best policy and that we would be deceiving investors if we
          promised them anything beyond a low probability of modest returns.
        </p>
      </div>
    )
  },
  {
    prefix: "05",
    question:
      "Isn’t there plenty of research on materials and manufacturing processes already?",
    answer: (
      <div className="pl-10 w-2/3">
        <p className="text-white text-sm">
          It’s true that both corporations and academia do a lot of research on
          materials and manufacturing. There are entire departments devoted to
          them! <br />
          <br />
          However, the sort of research work that is happening isn’t the kind of
          work that will unlock big technological shifts: <br />
          <br />
        </p>{" "}
        <ul>
          <li>
            Academic work focuses on only the most interesting and novel part of
            the problem: showing proofs-of-principle, usually in one component
            of a larger system.{" "}
          </li>
          <li>
            Industrial work primarily focuses on improvements within an existing
            system or business model.{" "}
          </li>
        </ul>
        <br />
        <p className="text-white text-sm">
          Breakthroughs in materials and manufacturing require creating new
          systems that can scale. The work to make materials and manufacturing
          systems scale can require as much research as inventing the system in
          the first place, but doesn’t lead to exciting papers (and thus, goes
          against academic incentives). At the same time, new materials and
          manufacturing processes often require new business models and have
          worse performance than existing systems out of the gate. Both of these
          properties make earnest efforts to scale and use unproven systems
          unappealing to most corporations. <br />
          <br />
          So while there is plenty of research on materials and manufacturing
          processes, there is a critical gap that we are trying to fill.
        </p>
      </div>
    )
  },
  {
    prefix: "06",
    question:
      "How are your programs different from focused research organizations?",
    answer: (
      <div className="pl-10 w-2/3">
        {" "}
        <p className="text-white text-sm">
          There are many similarities between{" "}
          <a
            target="_blank"
            href="https://www.dayoneproject.org/ideas/focused-research-organizations-to-accelerate-science-technology-and-medicine/"
          >
            Focused Research Organizations (FROs){" "}
          </a>
          and private ARPA-style programs: both focus on things that don’t fit
          into academia or startups, both leverage empowered leaders, both aim
          towards clear goals. <br />
          <br />
          However, there are key differences between “ARPA shaped ideas” and
          “FRO-shaped ideas: <br /> <br />
        </p>
        <ul>
          <li>
            FROs
            <ul>
              <li>
                Clear goal from day one Tight coupling between work-streams from
                day one
              </li>
              <li>
                Strong conviction about the right approach at the project level
                early on
              </li>
              <li>
                Most work done under one organizational roof, outsourcing
                routine aspects to contractors but not widely distributing the
                fundamental research questions.
              </li>
              <li>
                Quickly ramp up to $10-50m range to focus on scalable execution
                not achievable in existing organizational settings.
              </li>
            </ul>
          </li>
          <li>
            ARPA shaped ideas
            <ul>
              <li>
                No clear goal from day one, but a clear goal is the end goal
              </li>
              <li>
                Projects are initially parallel with coupling increasing over
                time
              </li>
              <li>
                Unclear about the right approach at the project level early on
              </li>
              <li>
                Naturally leverages existing organizations and forms networks
                among them to develop new system level ideas, approaches or
                concepts.
              </li>
            </ul>
          </li>
        </ul>
      </div>
    )
  },
  {
    prefix: "07",
    question: "Why not work on urgent problems like climate and health?",
    answer: (
      <div className="pl-10 w-2/3">
        <p className="text-white text-sm">
          Materials and manufacturing may seem removed from the world’s most
          important problems: war, poverty, inequality, climate change,
          sickness, and death. But{" "}
          <strong>
            materials and manufacturing are upstream of all these problems
          </strong>
          . The time and money that we pour into therapeutics and carbon removal
          are not a complete waste, but without entirely new ways to rearrange
          atoms, materials to contain fission and fusion power, and new ways to
          make technology that breaks us out of our hyper-optimized and fragile
          paradigms, there are diminishing returns to work that directly attacks
          big problems. <br />
          <br />
          <strong>
            The history of technology is dominated by second-order effects
          </strong>
          : we solved many huge problems not by working on them directly, but by
          creating powerful technologies – the Haber-Bosch process, steel,
          electricity, refrigeration, and beyond. More broadly, new frontiers
          obsolete old problems, break us out of zero-sum games, and create
          human agency.
        </p>
      </div>
    )
  },
  {
    prefix: "08",
    question: "How are you different from DARPA?",
    answer: (
      <div className="pl-10 w-2/3">
        <p className="text-white text-sm">
          There are three major differences:
          <br />
          <br />
        </p>
        <ul>
          <li>
            <strong>We have different mandates: </strong>ours is to build the
            future through new materials and manufacturing processes; theirs is
            to &ldquo;prevent strategic surprise.&rdquo; While DARPA&rsquo;s
            mandate is broad, it still needs to justify all the work it does in
            terms of national defense.
          </li>
          <li>
            <strong>We answer to different stakeholders:</strong>DARPA is still
            a government agency. Despite having lower bureaucratic overhead than
            most parts of the US government, DARPA is still answerable to the
            Department of Defense, Congress, and the American taxpayer more
            broadly. Those stakeholders demand a certain set of justifications.
            We have our own stakeholders: our donors, employees (and we like to
            think) humanity more broadly. These stakeholders still demand
            justifications, but a different kind.
          </li>
          <li>
            <strong>We have different constraints: </strong>DARPA has a budget
            that is orders of magnitude larger than ours. As a result,
            they&rsquo;re able to take on more expensive work. At the same time,
            we have many fewer constraints on how fast we can move and the sorts
            of &ldquo;institutional moves&rdquo; we can make. There&rsquo;s
            nothing stopping Speculative Technologies from writing a check the
            day we decide to fund a project or giving money to an unincorporated
            team working out of a garage if they&rsquo;re doing good work.
          </li>
        </ul>
      </div>
    )
  },
  {
    prefix: "09",
    question: "Why now?",
    answer: (
      <div className="pl-10 w-2/3">
        <p className="text-white text-sm">
          {" "}
          The problems we’re addressing are not new. The realization that
          something is amiss with our innovation ecosystem is more than a decade
          old. Tyler Cowen published his book “The Great Stagnation” in 2011.
          That same year Founders Fund adopted their now-famous tagline “We were
          promised flying cars, instead we got 140 characters.”
          <br />
          <br />
          At the time though, a widely held view was that high-growth startups
          were the solution. After all, Silicon Valley had begun to disrupt
          media, shopping, transportation, and many other industries. Nominally,
          they did this by building technology so it was natural to assume that
          high-growth startups would soon do the same for materials,
          manufacturing, and research more generally.
          <br />
          <br />
          One why now is that enough time has passed to make it clear that we
          need more than ambitious startups to improve the innovation ecosystem.
          By and large, the story of ambitious, researchy startups building
          general-purpose technologies is that they either go out of business,
          are acquired for talent, or pivot towards profitable niches. It has
          become clear that we need something beyond startups. Additionally,
          recent events have exposed the cracks in many systems:
          <br />
          <br />
        </p>
        <ul>
          <li>
            There are many talented people trained in the hard sciences or
            engineering disciplines who want to do hard, impactful, research
            work but (reasonably) opt out of academia and its tiny number of
            professor positions compared to the postdocs who want to fill them,
            bureaucracy, publish or perish, and more. People have realized that
            they could be doing so much more than data science or SaaS startups.
          </li>

          <li>
            COVID and Ukraine-driven supply chain disruptions and geopolitical
            tensions have made it clear that there is a lot of important work to
            be done in materials and manufacturing to make more robust systems.
          </li>

          <li>
            The pandemic also revealed that relatively small interventions could
            have a large impact on our sclerotic research system. Fast Grants,
            premised on the simple idea that a fast turnaround time on grant
            decisions could unlock research that wouldn’t otherwise happen, was
            able to get hundreds of COVID-related projects off the ground that
            would otherwise have been stuck in limbo.
          </li>
        </ul>
        <p className="text-white text-sm">
          <br />
          To some extent, the answer is also “vibes.” Many people have realized
          that the innovation ecosystem and old institutions more generally are
          not working as well as they once did. While perhaps not the consensus
          position, there’s a growing perception that we need new institutions.
          <br />
        </p>
      </div>
    )
  },
  {
    prefix: "10",
    question: "Why you?",
    answer: (
      <div className="pl-10 w-2/3">
        <p className="text-white text-sm">
          We’re working with excellent <a href="/team">program managers</a> who
          have ambitious visions and deeply understand how research works while
          being intimately familiar with the limitations of the current system.
          <br />
          <br />
          We’ve assembled a group of{" "}
          <a target="_blank" href="http://spec.tech/team">
            top-tier advisors and donors{" "}
          </a>
          who understand what we’re going for and will both push us to be
          pragmatic but not to deviate from the broader mission. <br />
          <br />
          Ben, Speculative Technologies’ founder has worked across the research
          ecosystem: PhD in academia working with NASA’s Chief Technologist on
          tractor beams for space robots, visiting researcher at NASA, computer
          vision at a unicorn startup trying to build drastically new
          technology, starting a startup, and venture capital. He’s written a
          heavily-cited analysis of how DARPA works that is directly influencing
          how Speculative Technologies works.
        </p>
      </div>
    )
  }
];
