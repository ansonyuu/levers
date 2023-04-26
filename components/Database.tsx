import { ReactNode } from "react";
import Image from "next/image";

export default function Letter() {
  return (
    <div className="flex flex-row p-20 pl-40 border-t-4 h-auto w-full relative b">
      <div className="w-1/4">
        <h2 className="text-[40px]">Letter</h2>
        <h3>Intro</h3>
      </div>
      <div className="w-3/4">
        <p>
          Levers for Progress is a playbook that synthesizes policies, tactics,
          and reforms used by modern institutions to accelerate innovation. Why
          progress is timely and important now
          <br /> <br />
          Scaling these levers across American institutions is imperative due to
          recent political, economic, and technological tailwinds. Covid
          highlighted the life-saving stakes of fast R&D. Geopolitical
          competition calls for accelerated innovation of dual-use technologies
          to maintain national security and economic prominence. Decades of
          offshoring have produced supply chain vulnerabilities, labor distress,
          and loss of know-how — underscoring the need to reinvest in domestic
          capacity. The price of core social goods, from life-saving drugs to
          higher education, is becoming cost prohibitive for the middle and
          lower classes. Climate change presents global challenges for energy
          and food insecurity.
          <br /> <br />
          Who’s getting behind it – Intellectual movements are rising +
          institutional formation In response to these challenges, diverse
          movements calling for accelerating S&T progress have emerged in just
          the past three years. Industrial policy has gained bipartisan traction
          in Washington—resulting in the $280B CHIPS+Science Act. Public
          intellectuals across the political spectrum have championed agendas to
          “take innovation as serious as affordability,” such as Ezra Klein and
          supply-side progressivism, Derek Thompson and the abundance agenda,
          and Niskanen and cost-disease socialism. Patrick Collison and Tyler
          Cowen’s 2019 publication We Need a New Science of Progress ignited a
          vibrant progress studies community.  These intellectual strands have
          birthed many new institutions. The NSF’s $300M TIP directorate and
          UK’s £800M ARIA aim to unshackle innovation from traditional
          bureaucracies. Schmidt Futures, Stripe, Open Philanthropy, and other
          funders are experimenting with new ways of funding science, incubating
          projects like Convergent Research, Frontier Climate, and Speculative
          Technologies. A slew of publications — Roots of Progress, Works in
          Progress, and Faster Please! document critical lessons in progress
          studies. New progress think tanks like the Institute for Progress and
          the Day One Project translate ideas into policies, resulting in
          successes like ARPA-H and NSF’s TIP. Lastly, initiatives to bridge
          Silicon Valley and DC have gained popularity, including the Horizon
          Institute, TechCongress, Hill & Valley Forum, and Progress Lab. There
          are more, but you get the idea — copious amounts of capital,
          brainpower, and political will are activating
        </p>
      </div>
    </div>
  );
}
