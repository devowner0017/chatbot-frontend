import { makeAutoObservable } from "mobx";
// setShowInsight
//showInsight
export default class InsightsStore {
    constructor() {
        this.insights_list = [];
        this.insight_id_display = 0;
        this.is_show_insight_modal = false;
        makeAutoObservable(this)
    }

    setInsightsList(list) {
        this.insights_list = list;
    }
    setInsightIdDisplay(id) {
        this.insight_id_display = id;
    }
    setDisplayInsight(bool) {
        this.is_show_insight_modal = bool;
    }

    get insightsList() {
        return this.insights_list;
    }
    get insightIdDisplay() {
        return this.insight_id_display;
    }
    get displayInsight() {
        return this.is_show_insight_modal;
    }
}