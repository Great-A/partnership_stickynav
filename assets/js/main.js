function recalculateForm() {
    jQuery(document).ready(function ($) {
        const interestRateVal = $('#interestRate').val();
        const periodicInterestRate = interestRateVal / 12;
        const numberOfPeriods = 36;
        const amountBorrowed = $('#tuitionLoanAmount').val();
        const originationFees = 0.05;
        const totalLoan = amountBorrowed*(1+originationFees);
        const nonPaymentPeriods = 12;
        const totalRepaiment = totalLoan*(1+periodicInterestRate*nonPaymentPeriods);



        //setting values
        $('#LabelForInterestRateResult').html(interestRateVal+'%');
        $('#LabelForMonthlyOnSchoolPayments').html(totalRepaiment+'%');
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