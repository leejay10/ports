export default class Part
{
	constructor(id, type, name, morale, combat, seafaring, worseThan, owned){
		this.id = id;
		this.type = type;
		this.name = name;
		this.morale = morale;
		this.combat = combat;
		this.seafaring = seafaring;
		this.worseThan = worseThan;
		this.owned = owned;
	}
}