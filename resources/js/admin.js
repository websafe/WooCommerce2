/**
 *
 *
 * NOTICE OF LICENSE
 *
 * This source file is subject to the Academic Free License (AFL 3.0)
 * that is bundled with this package in the file LICENSE.txt.
 * It is also available through the world-wide-web at this URL:
 * http://opensource.org/licenses/afl-3.0.php
 * If you did not receive a copy of the license and are unable to
 * obtain it through the world-wide-web, please send an email
 * to tech@dotpay.pl so we can send you a copy immediately.
 *
 * DISCLAIMER
 *
 * Do not edit or add to this file if you wish to upgrade WooCommerce to newer
 * versions in the future. If you wish to customize WooCommerce for your
 * needs please refer to http://www.dotpay.pl for more information.
 *
 *  @author    Dotpay Team <tech@dotpay.pl>
 *  @copyright Dotpay
 *  @license   http://opensource.org/licenses/afl-3.0.php  Academic Free License (AFL 3.0)
 *
 */

 function checIfLangPL() {
      var doclang = document.documentElement.lang;
      var res = doclang.toLowerCase();
      var n = res.search('pl');
    if(n >= 0 ) {
      return true;
    }else{
      return false;
    }

 }
//check if is polish language in admin panel
if(checIfLangPL() === true) {
  var dp_pincheck = "Pin składa się przynajmniej z 16 a maksymalnie z 32 znaków alfanumerycznych!";
  var dp_allowed = "Dozwolone tylko cyfry (6 cyfr)";
  var dp_shipping_methods = "Dostępne metody wysyłki";
  var dp_additional1 = "Dodatkowe ustawienia dla płatności odroczonych";
  var dp_additional2 = "Wymagana dodatkowa Umowa w celu uruchomienia kanałów płatności obsługujących tę formę płatności.";
  var dp_currency_leave = "Zostaw pole puste lub podaj walutę w formacie ISO 4217, np: EUR lub EUR,USD";
  var dp_introduction1 = "Dziękujemy za wybranie Dotpay!";
  var dp_introduction2a = "Wiodący na polskim rynku operatorzy płatności online:";
  var dp_introduction2b = "i";
  var dp_introduction2c = "działają teraz wspólnie.";
  var dp_introduction2d = "Docelową platformą, dzięki której udostępnimy najlepszą możliwą infrastrukturę, produkty oraz usługi będzie serwis Przelewy24.";
  var dp_introduction2e = "Dlatego też z w tej wersji moduły płatności zauważysz zmiany nazwy oraz logotypów.";
  var dp_introduction3 = "Aby poprawnie skonfigurować nasz moduł płatności <a href=\"https://github.com/dotpay/WooCommerce2#instrukcja\" target=\"_new\">sprawdź wcześniej instrukcję</a>.";
  var dp_transer_instruction_txt = "Wymaga wprowadzenia danych: nazwa użytkownika i hasło do Api oraz odpowiednich dodatkowych uprawnień.";
}else {
  var dp_pincheck = "The pin consists of at least 16 and a maximum of 32 alphanumeric characters!";
  var dp_allowed = "Only digits allowed (6 digits)";
  var dp_shipping_methods = "Available shipping methods";
  var dp_additional1 = "Additional settings for deferred payments";
  var dp_additional2 = "Additional Agreement required to enable payment channels that support this form of payment.";
  var dp_currency_leave = "Leave the field blank or enter a currency in ISO 4217 format, e.g. EUR or EUR, USD";
  var dp_introduction1 = "Thank you for choosing Dotpay!";
  var dp_introduction2a = "Leading online payment operators on the Polish market:";
  var dp_introduction2b = "i";
  var dp_introduction2c = "now work together.";
  var dp_introduction2d = "The target platform thanks to which we will provide the best possible infrastructure, products and services will be Przelewy24.";
  var dp_introduction2e = "Therefore, in this version of the payment module, you will notice changes in the name and logos.";
  var dp_introduction3 = "To correctly configure our payment module <a href=\"https://github.com/dotpay/WooCommerce2#instructions\" target=\"_new\">check instructions first</a>.";
  var dp_transer_instruction_txt = "Requires the entry of data: username and password to api and appropriate additional permissions.";

}


function switchPV(obj) {
  if (jQuery(obj).prop('checked')) {
    jQuery('.pv_option').parents('tr').fadeIn();
    jQuery("#woocommerce_dotpay_pin2").attr("pattern", "[a-zA-Z0-9]{16,32}");
    jQuery("#woocommerce_dotpay_pin2").prop('required', true);
    jQuery("#woocommerce_dotpay_pin2").attr("title", dp_pincheck);
  } else {
    jQuery('.pv_option').parents('tr').fadeOut();
    jQuery("#woocommerce_dotpay_pin2").prop('required', false);
  }
}


function showSanboxP24Migrated(obj) {
    if (jQuery(obj).prop('checked')){
      jQuery('#woocommerce_dotpay_test').parents('tr').fadeOut();
      jQuery('#woocommerce_dotpay_dproxy_migrated').parents('tr').attr('style', 'border : 0.3rem solid #f0c0c0; border-radius: 12px; background: #e8ffe3;');
    }else{
      jQuery('#woocommerce_dotpay_test').parents('tr').fadeIn();
      jQuery('#woocommerce_dotpay_dproxy_migrated').parents('tr').attr('style', 'border : 0.3rem solid #c0def0; border-radius: 12px; background: #e1f0f2;');
    }
  }

function shownumberCHcc(obj) {
  if (jQuery(obj).prop('checked'))
    jQuery('.cc_option').parents('tr').fadeIn();
  else
    jQuery('.cc_option').parents('tr').fadeOut();
}
function showChannelNames(obj) {
  if (jQuery(obj).prop('checked'))
    jQuery('.widget_channel_names').parents('tr').fadeIn();
  else
    jQuery('.widget_channel_names').parents('tr').fadeOut();
}

function isenambledDotpaymodule(obj) {
  if (jQuery(obj).prop('checked')) {
    jQuery("#woocommerce_dotpay_id").prop('required', true);
    jQuery("#woocommerce_dotpay_pin").prop('required', true);
  } else {
    jQuery("#woocommerce_dotpay_id").prop('required', false);
    jQuery("#woocommerce_dotpay_pin").prop('required', false);
  }
}



if (typeof jQuery != 'undefined') {
  var dotpayModules = ['blik', 'mp', 'oc', 'pv', 'tc'];
  jQuery(document).ready(function() {
    var regExpToRemove = new RegExp("Dotpay_");
    jQuery("form#mainform a").filter(function() {
      return regExpToRemove.test(jQuery(this).text());
    }).parents('li').remove();
    switchPV(jQuery('.pv_switch'));
    jQuery('.pv_switch').change(function() {
      switchPV(this);
    });
    shownumberCHcc(jQuery('.cc_switch'));
    jQuery('.cc_switch').change(function() {
      shownumberCHcc(this);
    });
    showChannelNames(jQuery('.widget_show'));
    jQuery('.widget_show').change(function() {
      showChannelNames(this);
    });

    showSanboxP24Migrated(jQuery('#woocommerce_dotpay_dproxy_migrated'));
    jQuery('#woocommerce_dotpay_dproxy_migrated').change(function() {
      showSanboxP24Migrated(this);
    });

    

    isenambledDotpaymodule(jQuery('.dotpay_module_enable'));

    // module setup: validate ID
    jQuery("#woocommerce_dotpay_id").attr("pattern", "[0-9]{5,6}");
    jQuery("#woocommerce_dotpay_id").attr("title", dp_allowed);
    jQuery("#woocommerce_dotpay_id").attr("maxlength", "6");
    jQuery("#woocommerce_dotpay_id").prop("placeholder", "np. 123456");

    jQuery("#woocommerce_dotpay_id").bind('keyup paste keydown', function(e) {
      if (/\D/g.test(this.value)) {
        // Filter non-digits from input value.
        this.value = this.value.replace(/\D/g, '');
      }
    });

    //remove spaces from PIN input
			jQuery("#woocommerce_dotpay_pin").bind('keyup paste keydown', function(e) {
				jQuery(this).val(function(_, v){
					return v.replace(/\s+/g, '');
				});
    		});

        //only capital letters and commas allowed: currences
        jQuery('input#woocommerce_dotpay_dontview_currency').bind('keyup blur', function () {
                    $(this).val($(this).val().replace(/[^A-Z,]/g, ''))
                });

      //remove spaces from api username input
      jQuery("input#woocommerce_dotpay_api_username").bind('keyup paste keydown', function(e) {
      			jQuery(this).val(function(_, v){
      					return v.replace(/\s+/g, '');
          				});

                 if(jQuery("input#woocommerce_dotpay_api_username").val().length > 2 ){
                    if(jQuery('#dp_alert-notice_transfer').length > 0){
                      jQuery('#dp_alert-notice_transfer').remove();
                    }  
                 } else {

                  if(jQuery('#dp_alert-notice_transfer').length < 1 && jQuery(".dp_transfer_instruction").prop('checked')){
                    jQuery('<div class="notice notice-error dotpay-error-notice" id="dp_alert-notice_transfer"><p><strong>'+ dp_transer_instruction_txt +'</div>').insertAfter(jQuery('#dp_transfer_instruction_contact'));
                  }

                 } 
   

      		});

          //remove spaces from api password input
      jQuery("input#woocommerce_dotpay_api_password").bind('keyup paste keydown', function(e) {
      			jQuery(this).val(function(_, v){
      					return v.replace(/\s+/g, '');
          				});


                  if(jQuery("input#woocommerce_dotpay_api_password").val().length > 2 ){
                    if(jQuery('#dp_alert-notice_transfer').length > 0){
                      jQuery('#dp_alert-notice_transfer').remove();
                    }  
                 } else {

                  if(jQuery('#dp_alert-notice_transfer').length < 1 && jQuery(".dp_transfer_instruction").prop('checked')){
                    jQuery('<div class="notice notice-error dotpay-error-notice" id="dp_alert-notice_transfer"><p><strong>'+ dp_transer_instruction_txt +'</div>').insertAfter(jQuery('#dp_transfer_instruction_contact'));
                  }

                 } 

      		});


    //  module setup: validatte ID2
    jQuery("#woocommerce_dotpay_id2").attr("pattern", "[0-9]{5,6}");
    jQuery("#woocommerce_dotpay_id2").attr("title", dp_allowed);
    jQuery("#woocommerce_dotpay_id2").attr("maxlength", "6");
    jQuery("#woocommerce_dotpay_id2").prop("placeholder", "np. 123456");

    jQuery("#woocommerce_dotpay_id2").bind('keyup paste keydown', function(e) {
      if (/\D/g.test(this.value)) {
        // Filter non-digits from input value.
        this.value = this.value.replace(/\D/g, '');
      }
    });

    // add pattern to configuration inputs
    jQuery("#woocommerce_dotpay_credit_card_channel_number").attr("pattern", "[0-9]{2,4}");
    jQuery("#woocommerce_dotpay_credit_card_channel_number").attr("title", dp_allowed);

    jQuery("#woocommerce_dotpay_pin").attr("minlength", "16");
    jQuery("#woocommerce_dotpay_pin").attr("pattern", "[a-zA-Z0-9]{16,32}");
    jQuery("#woocommerce_dotpay_pin").attr("title", dp_pincheck);


    // decorate elements for configuration module
    jQuery("<hr style='height: 3px; background: #439c91;'><br>").insertBefore(jQuery("#woocommerce_dotpay_api_username"));
    jQuery("<hr style='height: 3px; background: #439c91;'><br>").insertBefore(jQuery('label[for="woocommerce_dotpay_api_username"]'));

    jQuery("<hr style='height: 3px; background: #439c91;'><br>").insertBefore(jQuery('label[for="woocommerce_dotpay_oneclick_show"]'));
    jQuery("<hr style='height: 3px; background: #439c91;'><br>").insertBefore(jQuery('label[for="woocommerce_dotpay_credit_card_show"]'));
    jQuery("<hr style='height: 3px; background: #439c91;'><br>").insertBefore(jQuery('label[for="woocommerce_dotpay_masterpass_show"]'));
    jQuery("<hr style='height: 3px; background: #439c91;'><br>").insertBefore(jQuery('label[for="woocommerce_dotpay_blik_show"]'));
    jQuery("<hr style='height: 3px; background: #439c91;'><br>").insertBefore(jQuery('label[for="woocommerce_dotpay_paypo_show"]'));
    jQuery("<hr style='height: 3px; background: #439c91;'><br>").insertBefore(jQuery('label[for="woocommerce_dotpay_channels_show"]'));
    jQuery("<hr style='height: 3px; background: #439c91;'><br>").insertBefore(jQuery('label[for="woocommerce_dotpay_productname"]'));
    
    jQuery("<hr style='height: 3px; background: #c5ccd6;'><br>").insertBefore(jQuery('#woocommerce_dotpay_dontview_currency'));
    jQuery("<br><hr style='height: 3px; background: #c5ccd6;'><br>").insertBefore(jQuery('label[for="woocommerce_dotpay_dontview_currency"]'));
    jQuery("<hr style='height: 3px; background: #c5ccd6;'><br>").insertBefore(jQuery('label[for="woocommerce_dotpay_ccPV_show"]'));
    jQuery("<hr style='height: 3px; background: #c5ccd6;'><br>").insertBefore(jQuery('label[for="woocommerce_dotpay_test"]'));
    jQuery("<hr style='height: 3px; background: #c5ccd6;'><br>").insertAfter(jQuery('label[for="woocommerce_dotpay_test"]'));
    jQuery("<br><hr style='height: 3px; background: #c5ccd6;'>").insertAfter(jQuery('label[for="woocommerce_dotpay_enabled"]'));
    jQuery("<br><hr style='height: 3px; background: #c5ccd6;'><p style='font-weight: bold;'>"+ dp_shipping_methods +"</p><p>&nbsp;</p><br>").insertBefore(jQuery('label[for="woocommerce_dotpay_shipping_mapping_1"]'));
    jQuery("<br><hr style='height: 3px; background: #c5ccd6;'><p style='font-weight: bold;'>"+ dp_additional1 +"</p><p class='description'>"+ dp_additional2 +"</p><br>").insertBefore(jQuery('select#woocommerce_dotpay_shipping_mapping_1'));


    //  jQuery("#woocommerce_dotpay_dontview_currency").attr("pattern", "^(([A-Z]{3})\\s?,?\\s?)+");
    jQuery("#woocommerce_dotpay_dontview_currency").attr("pattern", "^(((AED|AFN|ALL|AMD|ANG|AOA|ARS|AUD|AWG|AZN|BAM|BBD|BDT|BGN|BHD|BIF|BMD|BND|BOB|BOV|BRL|BSD|BTN|BWP|BYN|BZD|CAD|CDF|CHE|CHF|CHW|CLF|CLP|CNY|COP|COU|CRC|CUC|CUP|CVE|CZK|DJF|DKK|DOP|DZD|EGP|ERN|ETB|EUR|FJD|FKP|GBP|GEL|GHS|GIP|GMD|GNF|GTQ|GYD|HKD|HNL|HTG|HUF|IDR|ILS|INR|IQD|IRR|ISK|JMD|JOD|JPY|KES|KGS|KHR|KMF|KPW|KRW|KWD|KYD|KZT|LAK|LBP|LKR|LRD|LSL|LYD|MAD|MDL|MGA|MKD|MMK|MNT|MOP|MRU|MUR|MVR|MWK|MXN|MXV|MYR|MZN|NAD|NGN|NIO|NOK|NPR|NZD|OMR|PAB|PEN|PGK|PHP|PKR|PLN|PYG|QAR|RON|RSD|RUB|RWF|SAR|SBD|SCR|SDG|SEK|SGD|SHP|SLL|SOS|SRD|SSP|STN|SVC|SYP|SZL|THB|TJS|TMT|TND|TOP|TRY|TTD|TWD|TZS|UAH|UGX|USD|USN|UYI|UYU|UZS|VEF|VND|VUV|WST|XAF|XAG|XAU|XBA|XBB|XBC|XBD|XCD|XDR|XOF|XPD|XPF|XPT|XSU|XTS|XUA|XXX|YER|ZAR|ZMW|ZWL))\\s?,?\\s?)+");
    jQuery("#woocommerce_dotpay_dontview_currency").attr("title", dp_currency_leave);

    jQuery('label[for="woocommerce_dotpay_id"] > span.woocommerce-help-tip').attr("style", "color: #2aaeed;font-size: 22px;");
    jQuery('label[for="woocommerce_dotpay_pin"] > span.woocommerce-help-tip').attr("style", "color: #2aaeed;font-size: 22px;");
    jQuery('label[for="woocommerce_dotpay_ccPV_currency"] > span.woocommerce-help-tip').attr("style", "color: #2aaeed;font-size: 22px;");

    jQuery('label[for^="woocommerce_dotpay_shipping_mapping_"] > span.woocommerce-help-tip').attr("style", "color: #2aaeed;font-size: 22px;");
    jQuery('label[for="woocommerce_dotpay_dontview_currency"] > span.woocommerce-help-tip').attr("style", "color: #2aaeed;font-size: 22px;");
    jQuery('label[for="woocommerce_dotpay_credit_card_show"] > span.woocommerce-help-tip').attr("style", "color: #2aaeed;font-size: 22px;");
    jQuery('label[for="woocommerce_dotpay_oneclick_show"] > span.woocommerce-help-tip').attr("style", "color: #2aaeed;font-size: 22px;");
    jQuery('label[for="woocommerce_dotpay_api_username"] > span.woocommerce-help-tip').attr("style", "color: #2aaeed;font-size: 22px;");
    jQuery('label[for="woocommerce_dotpay_api_password"] > span.woocommerce-help-tip').attr("style", "color: #2aaeed;font-size: 22px;");
    jQuery('label[for="woocommerce_dotpay_masterpass_show"] > span.woocommerce-help-tip').attr("style", "color: #2aaeed;font-size: 22px;");
    jQuery('label[for="woocommerce_dotpay_paypo_show"] > span.woocommerce-help-tip').attr("style", "color: #2aaeed;font-size: 22px;");


    jQuery(".dp_transfer_instruction").on('change', function() {
      if ( (jQuery('#woocommerce_dotpay_api_username').val().length < 3) || (jQuery('#woocommerce_dotpay_api_password').val().length < 3) )
         {
          if(jQuery('#dp_alert-notice_transfer').length < 1 && jQuery(".dp_transfer_instruction").prop('checked')){
              jQuery('<div class="notice notice-error dotpay-error-notice" id="dp_alert-notice_transfer"><p><strong>'+ dp_transer_instruction_txt +'</div>').insertAfter(jQuery('#dp_transfer_instruction_contact'));
          }

         }
      
        if (jQuery(".dp_transfer_instruction").prop('checked') == false ){
          if(jQuery('#dp_alert-notice_transfer').length > 0){
            jQuery('#dp_alert-notice_transfer').remove();
          }

         }   
         
   });



    // added info about manual
    jQuery('#dp_info-notice').remove();
    
    if(jQuery('#woocommerce_dotpay_id').length > 0 && jQuery('#dp_info-notice').length < 1)
    {
      jQuery('<div class="notice notice-info dotpay-info-notice" id="dp_info-notice"><h2>'+ dp_introduction1 +'</h2><br><p style="color: #1662b3">'+ dp_introduction2a +' <a href="https://www.przelewy24.pl/aktualnosci/kolejny-etap-integracji-przelewy24-i-dotpay-zakonczenie-kwestii-formalnych" target="_blank" title="www.przelewy24.pl"><span style="color: #C51B2A;font-weight: bold;">Przelewy24</span></a> '+ dp_introduction2b +' <a href="http://www.dotpay.pl" target="_blank" title="www.dotpay.pl"><span style="color: #7D1315;font-weight: bold;">Dotpay</span></a> '+ dp_introduction2c +'</p><p style="color: #1662b3">'+ dp_introduction2d +'</p><p style="color: #1662b3;font-weight: bold;">'+ dp_introduction2e +'</p><br> '+ dp_introduction3 +'<br><br></div>').insertBefore(jQuery('div.wrap.woocommerce > form#mainform table.form-table'));
    }

    jQuery('p:contains("Online payment")').remove();
    jQuery('p:contains("Płatności online")').remove();
    jQuery('tr').each(function(element) {
      var dotpayGatewayid = jQuery(this).attr('data-gateway_id');
      if (dotpayGatewayid !== undefined) {
        if (dotpayGatewayid.indexOf('Dotpay_') !== -1) {
          jQuery(this).find('a[class$="button alignright"]').remove();
          jQuery(this).find('a[class$="wc-payment-gateway-method-title"]').contents().unwrap();
          jQuery(this).find('a[class$="wc-payment-gateway-method-toggle-enabled"]').attr('href', '').css({
            'cursor': 'pointer',
            'pointer-events': 'none'
          });

        }
        if (dotpayGatewayid === 'dotpay') {
          jQuery(this).find('td[class$="description"]').prepend("<img src='data:image/png;base64,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' width='65' height='19' alt='Dotpay' style='vertical-align: text-bottom'>");
        }

      }
    });



  });


}
