import { Component, OnInit } from '@angular/core';
import { Form } from '@angular/forms';
import { async } from 'q';

import axios from "axios";
import { Alert } from 'selenium-webdriver';
const url = "http://compliancetool.herokuapp.com/calculation";

declare var $: any;
@Component({
    selector: 'app-new-lease',
    templateUrl: './new-lease.component.html',
    styleUrls: ['./new-lease.component.css']
})
export class NewLeaseComponent implements OnInit {
    constructor() {
        alert("constructor")
    }

    ngOnInit() {

        var data = {
            leaseContractNo: "lease No 1",
            classAsset: "asd",
            commencementDate: new Date(),
            paymentsAt: "Beginning",
            annualDiscountRate: "5",
            leaseTerm: 2,
            expectedPeriod: "16",
            leasePayment: "1000",
            paymentIntervals: "yearly",
            initialDirectCost: "0",
            guaranteedResidualValue: "0",
            usefulLifeOfTheAsset: "10",
            escalation: "103",
            escalationAfterEvery: "2"
        };
        var data1 = saveTechnicalDetails();
        async function saveTechnicalDetails() {


         
            const response = await axios.post(url, data);
            alert(JSON.stringify(response.data));
            return response.data;

        }
        console.log(data1);
        //       const response = await axios.post(url, data);
        //      return response.data;

        $(document).ready(function () {
            var navListItems = $('div.setup-panel div a'),
                allWells = $('.setup-content'),
                allNextBtn = $('.nextBtn');

            allWells.hide();

            navListItems.click(function (e) {
                e.preventDefault();
                var $target = $($(this).attr('href')),
                    $item = $(this);

                if (!$item.hasClass('disabled')) {
                    navListItems.removeClass('btn-primary').addClass('btn-default');
                    $item.addClass('btn-primary');
                    allWells.hide();
                    $target.show();
                    $target.find('input:eq(0)').focus();
                }
            });

            allNextBtn.click(function () {
                var curStep = $(this).closest(".setup-content"),
                    curStepBtn = curStep.attr("id"),
                    nextStepWizard = $('div.setup-panel div a[href="#' + curStepBtn + '"]').parent().next().children("a"),
                    curInputs = curStep.find("input[type='text'],input[type='url']"),
                    isValid = true;
                debugger
                if (curStepBtn == "step-1") {
                    $('.new_lease1').css('display', 'block');
                    $('.new_lease').css('display', 'none');
                    $('.new_lease2').css('display', 'none');
                    $('.new_lease3').css('display', 'none');
                    $('.new_lease4').css('display', 'none');
                }
                if (curStepBtn == "step-2") {
                    $('.new_lease2').css('display', 'block');
                    $('.new_lease').css('display', 'none');
                    $('.new_lease1').css('display', 'none');
                    $('.new_lease3').css('display', 'none');
                    $('.new_lease4').css('display', 'none');
                }
                if (curStepBtn == "step-3") {
                    $('.new_lease3').css('display', 'block');
                    $('.new_lease').css('display', 'none');
                    $('.new_lease1').css('display', 'none');
                    $('.new_lease2').css('display', 'none');
                    $('.new_lease4').css('display', 'none');
                }
                if (curStepBtn == "step-4") {
                    $('.new_lease4').css('display', 'block');
                    $('.new_lease').css('display', 'none');
                    $('.new_lease1').css('display', 'none');
                    $('.new_lease3').css('display', 'none');
                    $('.new_lease2').css('display', 'none');
                }
                $(".form-group").removeClass("has-error");
                for (var i = 0; i < curInputs.length; i++) {
                    if (!curInputs[i].validity.valid) {
                        isValid = false;
                        $(curInputs[i]).closest(".form-group").addClass("has-error");
                    }
                }

                if (isValid)
                    debugger;
                nextStepWizard.removeAttr('disabled').trigger('click');



            });
            $('div.setup-panel div a.btn-primary').trigger('click');
        });
    }



}
