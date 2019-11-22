import { Component, OnInit } from "@angular/core";
import { LeaseService } from "./leaseService";

const url = "http://compliancetool.herokuapp.com/calculation";

declare var $: any;

@Component({
  selector: "app-new-lease",
  templateUrl: "./new-lease.component.html",
  styleUrls: ["./new-lease.component.css"]
})
export class NewLeaseComponent implements OnInit {
  constructor(public leaseService: LeaseService) {}

  leaseContractNo = "1";
  classAsset = "1";
  commencementDate = new Date();
  paymentsAt = "beginning";
  annualDiscountRate = "1";
  leaseTerm = "1";
  expectedPeriod = "1";
  leasePayment = "1";
  paymentIntervals = "1";
  initialDirectCost = "1";
  guaranteedResidualValue = "1";
  usefulLifeOfTheAsset = "1";
  escalation = "1";
  escalationAfterEvery = "1";

  calculate() {
    var data = {
      leaseContractNo: this.leaseContractNo,
      classAsset: this.classAsset,
      commencementDate: this.commencementDate,
      paymentsAt: this.paymentsAt,
      annualDiscountRate: this.annualDiscountRate,
      leaseTerm: this.leaseTerm,
      expectedPeriod: this.expectedPeriod,
      leasePayment: this.leasePayment,
      paymentIntervals: this.paymentIntervals,
      initialDirectCost: this.initialDirectCost,
      guaranteedResidualValue: this.guaranteedResidualValue,
      usefulLifeOfTheAsset: this.usefulLifeOfTheAsset,
      escalation: this.escalation,
      escalationAfterEvery: this.escalationAfterEvery
    };
    var json = this.leaseService.calculate(data);
    var map = new Map(Object.entries(json));
    map.forEach(this.display);
  }

  display(values) {}

  ngOnInit() {
    $(document).ready(function() {
      var navListItems = $("div.setup-panel div a"),
        allWells = $(".setup-content"),
        allNextBtn = $(".nextBtn");

      allWells.hide();

      navListItems.click(function(e) {
        e.preventDefault();
        var $target = $($(this).attr("href")),
          $item = $(this);

        if (!$item.hasClass("disabled")) {
          navListItems.removeClass("btn-primary").addClass("btn-default");
          $item.addClass("btn-primary");
          allWells.hide();
          $target.show();
          $target.find("input:eq(0)").focus();
        }
      });

      allNextBtn.click(function() {
        var curStep = $(this).closest(".setup-content"),
          curStepBtn = curStep.attr("id"),
          nextStepWizard = $(
            'div.setup-panel div a[href="#' + curStepBtn + '"]'
          )
            .parent()
            .next()
            .children("a"),
          curInputs = curStep.find("input[type='text'],input[type='url']"),
          isValid = true;
        debugger;
        if (curStepBtn == "step-1") {
          $(".new_lease1").css("display", "block");
          $(".new_lease").css("display", "none");
          $(".new_lease2").css("display", "none");
          $(".new_lease3").css("display", "none");
          $(".new_lease4").css("display", "none");
        }
        if (curStepBtn == "step-2") {
          $(".new_lease2").css("display", "block");
          $(".new_lease").css("display", "none");
          $(".new_lease1").css("display", "none");
          $(".new_lease3").css("display", "none");
          $(".new_lease4").css("display", "none");
        }
        if (curStepBtn == "step-3") {
          $(".new_lease3").css("display", "block");
          $(".new_lease").css("display", "none");
          $(".new_lease1").css("display", "none");
          $(".new_lease2").css("display", "none");
          $(".new_lease4").css("display", "none");
        }
        if (curStepBtn == "step-4") {
          $(".new_lease4").css("display", "block");
          $(".new_lease").css("display", "none");
          $(".new_lease1").css("display", "none");
          $(".new_lease3").css("display", "none");
          $(".new_lease2").css("display", "none");
        }
        $(".form-group").removeClass("has-error");
        for (var i = 0; i < curInputs.length; i++) {
          if (!curInputs[i].validity.valid) {
            isValid = false;
            $(curInputs[i])
              .closest(".form-group")
              .addClass("has-error");
          }
        }

        if (isValid) debugger;
        nextStepWizard.removeAttr("disabled").trigger("click");
      });
      $("div.setup-panel div a.btn-primary").trigger("click");
    });
  }
}

  
