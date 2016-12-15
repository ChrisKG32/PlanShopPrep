
Template.usdaSearch.events({
  'keyup input.USDA-search':function(e, tmpl){
    tmpl.usdaOptions.set($(e.currentTarget).val());
    //console.log('derp');
  },
  'change select.USDA-select':function(e, tmpl, doc){   
    var container = $(e.currentTarget).closest('.autoform-array-item-body');
    var ndbInput = container.find('input[name$="ndbno"]');
    console.log(container);
    console.log(ndbInput);
    console.log(ndbInput.val());
    var selectValue = $(e.currentTarget).val();
    ndbInput.val( Number( selectValue.substr(1, selectValue.lastIndexOf(']') - 1) ) );
  },
  'click header span':function(e, tmpl){
   // console.log('derp');
    tmpl.usdaDisplay.set(!tmpl.usdaDisplay.get());
    $(e.currentTarget).hasClass('fa-plus') ? $(e.currentTarget).removeClass('fa-plus').addClass('fa-minus') : $(e.currentTarget).removeClass('fa-minus').addClass('fa-plus');
  }
});


Template.usdaSearch.helpers({
  usdaSearch:function(){

    if (Template.instance().usdaOptions.get().length > 2){
      return USDA.find({shrt_desc: {$regex: Template.instance().usdaOptions.get(), $options: 'i' }}, {limit: 100})
    } else {
      return []
    }
    

  },
  usdaDisplay:function(){
    if (Template.instance().usdaDisplay.get()){
      return ''
    } else {
      return 'hidden'
    }
  }
});


Template.usdaSearch.onCreated(function(){
  this.usdaOptions = new ReactiveVar('');
  this.usdaDisplay = new ReactiveVar(false);
  this.autorun(()=> {
    this.subscribe('allRecipes');
    this.subscribe('allIngredients');
    this.subscribe('files');
    this.subscribe('allMeasurements');
    this.subscribe('allUSDA');
  })
});