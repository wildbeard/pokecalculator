var PokeCalculator = {

  current_level: null,
  target_level: null,
  exp_btn: null,
  catches: [
    { name: 'Regular', xp: 100, phrase: ' Pokemon with a Regular throw.' },
    { name: 'Nice/Curveball', xp: 110, phrase: ' Pokemon with a Nice/Curveball throw.' },
    { name: 'Great', xp: 150, phrase: ' Pokemon with a Great throw.' },
    { name: 'Excellent', xp: 200, phrase: ' Pokemon with an Excellent throw.' },
    { name: 'New Pokemon', xp: 600, phrase: ' new Pokemon.' }
  ],
  darwin: 500,
  output: null,
  output_string: null,

  setup: function() {
    this.current_level = document.getElementById('current_level');
    this.target_level = document.getElementById('target_level');
    this.current_exp = document.getElementById('current_exp');
    this.exp_btn = document.getElementById('xp_btn');
    this.output = document.getElementById('output');

    this.exp_btn.onclick = this.calculateExp;

    for ( var i = 1; i <= 40; i++ ) {
      var opt = document.createElement('option');
      var opt1 = document.createElement('option');
      opt.text = i;
      opt.setAttribute('value', i);

      opt1.text = i;
      opt1.setAttribute('value', i);

      this.current_level.add(opt);
      this.target_level.add(opt1);
    }

  },

  calculateExp: function() {

    var me = PokeCalculator,
        needed = me.getExpNeeded(),
        _output = 'You need ' + needed + ' xp to reach your goal. You will need to..',
        evolutions = me.crunchExp(needed, me.darwin);

    for ( catches of me.catches ) {
      var xp = me.crunchExp(needed, catches.xp);
      _output += '<br />Catch ' + xp.regular + ' ( lucky: ' + xp.lucky + ')' + catches.phrase;
    }

    _output += '<br />Or Evolve ' + evolutions.regular + ' ( lucky: ' + evolutions.lucky + ') Pokemon.';

    me.output.innerHTML = _output;

  },

  getExpNeeded: function() {
    var curr = this.current_level.value,
        target = this.target_level.value,
        current_exp = this.current_exp.value;

    return xp_needed = ( this.findLevel(target).to - this.findLevel(curr).to ) - current_exp;
  },

  crunchExp: function(needed, per) {
    return { regular: Math.round(needed/per), lucky: Math.round((needed/per)/2) };
  },

  findLevel: function(level) {
    return xp.filter(function(l) {
      return l.level == level;
    })[0];
  }

};
