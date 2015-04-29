var Cat = function () {
	this.clickCount = ko.observable(0);
	this.name = ko.observable('Abby');
	this.imgSrc = ko.observable('cat.jpg');
	this.imgAttribution = ko.observable(0);

	this.catLevel = ko.computed(function() {
		if (this.clickCount() < 10) {
			return "Newborn";
		}
		else if (this.clickCount() < 25) {
			return "Infant";
		}
		else if (this.clickCount() < 50) {
			return "Teen";
		}
		else if (this.clickCount() < 100) {
			return "Adult";
		}
		else {
			return "Ninja";
		}
	}, this);

	this.nicknames = ko.observableArray([
		{ name: "Abs" },
		{ name: "Abby" },
		{ name: "Abigail" }
	]);
}

var ViewModel = function() {
	this.currentCat = ko.observable( new Cat() );
	this.incrementCounter = function() {
		this.clickCount(this.clickCount() + 1);
	}
}

ko.applyBindings(new ViewModel());