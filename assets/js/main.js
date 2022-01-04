function recalculateForm() {
    jQuery(document).ready(function ($) {
        const interestRateVal = $('#interestRate').val();
        const periodicInterestRate = (interestRateVal / 12)/100;
        const numberOfPeriods = $('#month36Payments:checked').val();
        const amountBorrowed = $('#tuitionLoanAmount').val();
        const originationFees = 0.05;
        const totalLoan = amountBorrowed*(1+originationFees);
        const nonPaymentPeriods = 12;
        const totalRepaiment = totalLoan*(1+periodicInterestRate*nonPaymentPeriods);
        const monthlyPayment = -(periodicInterestRate*totalRepaiment)/(1-((1+periodicInterestRate)^-numberOfPeriods));
        const monthlyInSchoolPayments = 0;
        console.log(monthlyPayment);


        //setting values
        $('#LabelForInterestRateResult').html(interestRateVal+'%');
        $('#LabelForTotalRepayment').html('$'+totalRepaiment);
        $('#LabelForMonthlyInSchoolPayments').html(monthlyInSchoolPayments);
        $('#LabelForMonthlyPostSchoolPayments').html(monthlyPayment.toFixed(2)+'$');
        $('#LabelForTotalLoanAmount').html('$'+ amountBorrowed);
    });
}

function changeRangeControl(e){
    const precent = e.value;
    const elemId = jQuery(e).attr("id");
    const units = jQuery('#LabelFor'+elemId).data('units');
    jQuery('#LabelFor'+elemId).html(units + precent);
    lastChangingSlider = elemId;
    recalculateForm();
}