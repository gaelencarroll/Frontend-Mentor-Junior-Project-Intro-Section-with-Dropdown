const $featuresAndArrow = $('.nav-item-with-arrow-section.features')
const $companyAndArrow = $('.nav-item-with-arrow-section.company')
const $dropdownFeatures = $('.dropdown.features')
const $dropdownCompany = $('.dropdown.company')
const $dropdownListContainer = $('.dropdown-list-container')
const $dropdownCompanyContainer = $('.dropdown-company-container')
const $dropdownIconsFeatures = $('.dropdown-icon.features')
const $arrowFeatures = $('.arrow.features')
const $arrowCompany = $('.arrow.company')

const $mobileNavBarIcon = $('.mobile-nav-bar-icon')

$featuresAndArrow.hover(function(){
    $dropdownFeatures.addClass('display-features')
    $dropdownListContainer.addClass('display-features-list');
    $dropdownIconsFeatures.addClass('display-icons-features');
    $arrowFeatures.addClass('arrow-flipped-features')
}, function(){
    $dropdownFeatures.removeClass('display-features')
    $dropdownListContainer.removeClass('display-features-list');
    $dropdownIconsFeatures.removeClass('display-icons-features');
    $arrowFeatures.removeClass('arrow-flipped-features')
})

$companyAndArrow.hover(function(){
    $dropdownCompany.addClass('display-company')
    $dropdownCompanyContainer.addClass('display-company-list');
    $dropdownIconsCompany.addClass('display-icons-company');
    $arrowCompany.addClass('arrow-flipped-company')
}, function(){
    $dropdownCompany.removeClass('display-company')
    $dropdownCompanyContainer.removeClass('display-company-list');
    $dropdownIconsCompany.removeClass('display-icons-company');
    $arrowCompany.removeClass('arrow-flipped-company')
})


.$mobileNavBarIcon.click(function(){
    
})