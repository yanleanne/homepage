"use strict";

const MEMBER_ACTIONS = [
  {
    title: "2021/2022 Adult Membership",
    dateRange: "1/04/2021 - 31/03/2022",
    subtitle: "Adult Membership",
    description:
      "Eligibility: For members from 21 years old (one off joining fee of $92 plus prorata subscription fee of $46 from Oct 2021 to Mar 2022)",
    button: "JOIN NOW",
  },
  {
    title: "2021/2022 Associate Membership",
    dateRange: "1/04/2021 - 31/03/2022",
    subtitle: "Associate Membership",
    description:
      "Eligibility: For members under 21 years of age (one off joining fee of $40 plus prorata subscription fee of $20 from Oct 2021 to Mar 2022)",
    button: "JOIN NOW",
  },
  {
    title: "2021/2022 Family Membership",
    dateRange: "1/04/2021 - 31/03/2022",
    subtitle: "Family Membership",
    description:
      "Eligibility: 2 Adults + children under 21 years old (one off fee of $132 plus prorata subscription fee of $94 from Oct 2021 to Mar 2022)",
    button: "JOIN NOW",
  },
];

const renderMemberAction = (index) => {
  const content =
    index >= 0 && index < 3 ? MEMBER_ACTIONS[index] : MEMBER_ACTIONS[0];

  $(".member-actions .card-content .card-title").html(content.title);
  $(".member-actions .card-content .card-date-range").html(content.dateRange);
  $(".member-actions .card-content .card-subtitle").html(content.subtitle);
  $(".member-actions .card-content .card-text").html(content.description);
  $(".member-actions .card-submit .btn").html(content.button);
};

$(document).ready(() => {
  renderMemberAction(0);
});

$(".member-actions .nav-link").click((e) => {
  $(".member-actions .nav-link").removeClass("active");
  $(e.currentTarget).addClass("active");

  const index = $(e.currentTarget).attr("tabindex");

  renderMemberAction(index);
});
