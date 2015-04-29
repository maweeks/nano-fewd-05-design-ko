var initialCats = [
	{
		clickCount: 0,
		name: 'Abby',
		imgSrc: 'cat.jpg',
		imgAttribution: 0,
		nicknames: [ { name: "Abs" }, { name: "Abby" }, { name: "Abigail" } ]
	},
	{
		clickCount: 0,
		name: 'Dave',
		imgSrc: 'cat2.jpg',
		imgAttribution: 0,
		nicknames: [ { name: "D" }, { name: "Dav" } ]
	},
	{
		clickCount: 0,
		name: 'Jack',
		imgSrc: 'cat3.jpg',
		imgAttribution: 0,
		nicknames: [ { name: "J" }, { name: "Jac" } ]
	},
	{
		clickCount: 0,
		name: 'Jimmy',
		imgSrc: 'cat4.jpg',
		imgAttribution: 0,
		nicknames: [ { name: "Jim" } ]
	},
	{
		clickCount: 0,
		name: 'Scotty',
		imgSrc: 'cat5.jpg',
		imgAttribution: 0,
		nicknames: [ { name: "Scott" } ]
	},
];

var Cat = function (data) {
	this.clickCount = ko.observable(data.clickCount);
	this.name = ko.observable(data.name);
	this.imgSrc = ko.observable(data.imgSrc);
	this.imgAttribution = ko.observable(data.imgAttribution);

	this.catLevel = ko.computed(function() {
		if (this.clickCount() < 5) {
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

	this.nicknames = ko.observableArray(data.nicknames);
}

var ViewModel = function() {
	var self = this;
	self.catList = ko.observableArray([]);

	initialCats.forEach(function(catItem) {
		self.catList.push( new Cat(catItem) );
	});

	this.currentCat = ko.observable( this.catList()[0] );

	this.incrementCounter = function() {
		this.clickCount(this.clickCount() + 1);
	}

	this.setCurrentCat = function(data) {
		self.currentCat(data);
	}
}

ko.applyBindings(new ViewModel());