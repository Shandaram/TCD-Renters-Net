<template>
  <div class="main-container">
    <!-- first block -->
    <div class="l-block">
      <LandingText
        title="About us"
        subTitle="Who are we?"
        txt="TCD Renters Solidarity Network is a grassroot group of Trinity student tenants that aims to coordinate campaigns around the collective issues we face. We aim to campaign to challenge the restrictive and paternalistic overnight guests policy, advocate for free laundry machines and stand up against unaffordable rents, as well as to coordinate Palestinian solidarity such as flag drops. 

WE ORGANISE DIRECT ACTIONS TO MEET OUR DEMANDS. THIS INCLUDES PROTESTS, PETITIONS AND LEGAL PRESSURE. AS WELL AS THIS, WE ARE ORGANISING A RENT STRIKE. 
"
      />
      <img src="../assets/logo.png" alt="" />
    </div>
    <h1>Demands</h1>
    <!-- second block -->
    <div id="demands" class="l-block">
      <ListPopup
        :demands="demands"
        :defaultDemand="defaultDemand"
        :demandTexts="demandTexts"
      />
    </div>
    <h1>Join us!</h1>
    <!-- fourth block -->
    <h1>FAQ</h1>
    <div class="l-block">
      <ListPopup
        :demands="demands"
        :defaultDemand="defaultDemand"
        :demandTexts="demandTexts"
      />
    </div>
  </div>
</template>
<script>
import LandingText from "../components/LandingText.vue";
import ListPopup from "../components/ListPopup.vue";

export default {
  name: "AboutPage",
  components: {
    LandingText,
    ListPopup,
  },
  data() {
    return {
      demands: [
        "Abolish Overnight Guests Policy ",
        "30% Rent Reduction",
        "Cap Disability Applicant Students To Pearse Street Rents",
        "Rent Refunds for Each Day with Serious Maintenance Issues",
        "Free Laundry Machines",
        "Staff Visits To Be Communicated and Announced",
      ],
      defaultDemand: 0,
      demandTexts: [
        `The policy of not letting students sign in guests after 11pm at Halls, and 12am on campus disproportionately limits the rights and autonomy of student residents. It is a paternalistic, dangerous and hypocritical policy.
      Firstly, it is paternalistic because it does not treat students as adults capable of making their own choices.
      Secondly, it is might need to sleep at a resident’s place, such as in cases where they miss their public transport and cannot get home. Rejecting them from a safe place to sleep is unacceptable. It makes no sense in terms of controlling numbers because overnight guests can simply come on campus before midnight - as such, in any case, this policy is ineffective and only serves to put us in danger.
      Thirdly, it is hypocritical because the same policy does not apply to staff living on campus, such as lecturers or Fellows. 
      The issue has been raised by multiple student residents over a number of years, and as such we immediately call on College to change the policy to allow student residents to sign in guests any time.`,
        "A 30% reduction in campus rents is essential, considering 85% of students find current housing costs unaffordable, which not only exacerbates financial stress but could also detrimentally impact their academic performance and mental well-being. Lowering rents would make higher education more accessible, enabling a wider range of students to focus on their studies without the added burden of excessive housing costs, thereby fostering a more inclusive and supportive academic environment.",
        "The issue of accessible rooms being more expensive poses a significant concern for people with disabilities, highlighting an inequality that contradicts principles of inclusivity and equal opportunity. Charging higher rates for accessible rooms inadvertently penalizes individuals for their physical needs, exacerbating the financial burden on those who may already face additional expenses related to their disabilities. Therefore, we are asking to cap the prices for people with disabilities at the Pearse Street rents. ",
        "Implementing rent refunds for days affected by serious maintenance issues is a fair and equitable policy that holds housing providers accountable while ensuring students are not financially disadvantaged due to circumstances beyond their control. This approach incentivizes prompt and effective resolution of maintenance problems, improving living conditions and student satisfaction. ",
        "Offering free laundry facilities instead of charging 7.5 euros per wash and dry with Circuit Laundry can significantly alleviate financial strain on students, who often operate on tight budgets. Making laundry a basic, included amenity in student housing not only supports students financial well-being but also ensures equitable access to essential services, fostering a more inclusive and supportive living environment on campus.",
        "Better communication and advance announcements of staff visits are essential for respecting students privacy and schedules, minimizing disruptions, and fostering a more respectful campus environment.",
      ],
    };
  },
};
</script>

<style scoped>
h1 {
  text-align: center;
  padding-top: 5vw;
}
</style>
