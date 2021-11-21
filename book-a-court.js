"use strict";

const collectFormInfomation = () => {
  const name = $("#exampleInputName").val();
  const email = $("#exampleInputEmail1").val();
  const contact = $("#exampleInputContact").val();
  const timeDay = $("#exampleInputTimeDay").val();

  return [name, email, contact, timeDay];
};

$("#submit").click((e) => {
  const formInformation = collectFormInfomation();
  $("#booking .modal-body p").each(function (index) {
    $(this).find("span").html(formInformation[index]);
  });

  let myModal = new bootstrap.Modal(document.getElementById("booking"), {});
  myModal.show();
});
