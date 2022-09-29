"use strict";(self.webpackChunkmaterial_dashboard_angular=self.webpackChunkmaterial_dashboard_angular||[]).push([[270],{47270:function(t,e,a){a.r(e),a.d(e,{AdminLayoutModule:function(){return et}});var i=a(39895),n=a(86710),r=a(3679),o=a(88229),l=a(79765),s=a(25917),d=a(66682),c=a(45435),u=a(68307),p=a(46782),m=a(54395),h=a(87519),Z=a(88002),g=a(65792),v=a(4919),_=a(99692),f=a(1581);class A extends f.y{constructor(t){super(t)}}var T=a(11494),q=a(37716),y=a(97316),b=a(63385),U=a(65),S=a(26215),C=a(91841);let x=(()=>{class t extends U.b{constructor(t){super(t,"units/vacants"),this.selectedVacantUnitSource=new S.X(null),this.selectedVacantUnitChanges$=this.selectedVacantUnitSource.asObservable(),this.localHttpClient=t}changeSelectedVacantUnit(t){this.selectedVacantUnitSource.next(t)}search(t){const e=`${super.getResourceUrl()}/search`;return this.localHttpClient.post(e,{filter:t})}}return t.\u0275fac=function(e){return new(e||t)(q.LFG(C.eN))},t.\u0275prov=q.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();var D=a(25572),w=a(98295),Y=a(67441),$=a(38583),L=a(32789),N=a(72458),Q=a(12178);const B=["search"];function I(t,e){if(1&t&&(q.TgZ(0,"mat-option",44),q._uU(1),q.qZA()),2&t){const t=e.$implicit;q.Q6J("value",t.period_id),q.xp6(1),q.hij(" ",t.period_name," ")}}function P(t,e){1&t&&(q.TgZ(0,"mat-header-cell",45),q._uU(1," Mode "),q.qZA())}function J(t,e){if(1&t&&(q.TgZ(0,"mat-cell"),q._uU(1),q.ALo(2,"titlecase"),q.qZA()),2&t){const t=e.$implicit;q.xp6(1),q.hij(" ",q.lcZ(2,1,t.unit_mode)," ")}}function O(t,e){1&t&&(q.TgZ(0,"mat-header-cell",45),q._uU(1," Type "),q.qZA())}function j(t,e){if(1&t&&(q.TgZ(0,"mat-cell"),q._uU(1),q.qZA()),2&t){const t=e.$implicit;q.xp6(1),q.hij(" ",null==t.unit_type?null:t.unit_type.unit_type_display_name," ")}}function k(t,e){1&t&&(q.TgZ(0,"mat-header-cell",45),q._uU(1," Unit "),q.qZA())}function F(t,e){if(1&t&&(q.TgZ(0,"mat-cell"),q._uU(1),q.ALo(2,"titlecase"),q.qZA()),2&t){const t=e.$implicit;q.xp6(1),q.hij(" ",q.lcZ(2,1,t.unit_name)," ")}}function R(t,e){1&t&&(q.TgZ(0,"mat-header-cell",45),q._uU(1," Property "),q.qZA())}function G(t,e){if(1&t&&(q.TgZ(0,"mat-cell"),q._uU(1),q.qZA()),2&t){const t=e.$implicit;q.xp6(1),q.AsE(" ",null==t.property?null:t.property.property_name," - (",null==t.property?null:t.property.property_code,")")}}function H(t,e){1&t&&(q.TgZ(0,"mat-header-cell"),q._uU(1," Location "),q.qZA())}function z(t,e){if(1&t&&(q.TgZ(0,"mat-cell"),q._uU(1),q.qZA()),2&t){const t=e.$implicit;q.xp6(1),q.hij(" ",null==t.property?null:t.property.location," ")}}function V(t,e){1&t&&q._UZ(0,"mat-header-row")}function E(t,e){1&t&&q._UZ(0,"mat-row")}function M(t,e){1&t&&(q.TgZ(0,"span"),q._uU(1,"No Data"),q.qZA())}function X(t,e){1&t&&(q.TgZ(0,"div",46),q._UZ(1,"mat-progress-bar",47),q.qZA())}const W=[{path:"dashboard",component:(()=>{class t{constructor(t,e,a,i,n,s){this.store=t,this.localStorageService=e,this.route=a,this._formBuilder=i,this.propertyService=n,this.vacantUnitService=s,this.properties=[],this.propertyServerSideFilteringCtrl=new r.NI,this.searching=!1,this.filteredServerSideProperties=new o.t(1),this._onDestroy=new l.xQ,this.vacantUnitColumns=["unit_mode","unit_type_id","unit_name","property_id","location"],this.loader=!1,this.pageIndex=0,this.pageSizeOptions=[3,5,10,25,50,100],this.barChartOptions={scaleShowVerticalLines:!1,responsive:!0},this.barChartLabels=[],this.barChartType="bar",this.barChartLegend=!0,this.barChartData=[],this.pieChartLabels=["Pending","Paid","Billed"],this.pieChartType="doughnut",this.options={responsive:!0,maintainAspectRatio:!1},this.formBillingStats=this._formBuilder.group({property_id:[""],period_id:[""]})}ngOnInit(){var t,e,a;this.scopes$=this.store.pipe((0,n.Ys)(v.Al)),this.store.pipe((0,n.Ys)(v.Zb)).subscribe(t=>this.LoggedInUserId=t),this.route.snapshot.data.adminData&&(this.adminSummary=this.route.snapshot.data.adminData),this.periods$=(0,s.of)(null===(t=this.adminSummary)||void 0===t?void 0:t.periodical_billing);const i=null===(e=this.adminSummary)||void 0===e?void 0:e.periodical_billing[0];this.billed$=(0,s.of)(null==i?void 0:i.amount_billed_as_currency),this.paid$=(0,s.of)(null==i?void 0:i.amount_paid_as_currency),this.pending$=(0,s.of)(null==i?void 0:i.amount_due_as_currency),this.billingForm=this._formBuilder.group({period_id:[null==i?void 0:i.period_id,[r.kI.required]]}),this.pieChartData$=(0,s.of)([null==i?void 0:i.amount_due,null==i?void 0:i.amount_paid,null==i?void 0:i.amount_billed]);const o=[],l=[],d=[],_=[];(null===(a=this.adminSummary)||void 0===a?void 0:a.periodical_billing.reverse()).forEach(function(t){o.push(null==t?void 0:t.period_name),l.push(null==t?void 0:t.amount_billed),d.push(null==t?void 0:t.amount_paid),_.push(null==t?void 0:t.amount_due)}),this.barChartLabels=o,this.barChartData=[{data:_,label:"Pending"},{data:d,label:"Paid"},{data:l,label:"Billed"}],this.vacantUnitsDataSource=new A(this.vacantUnitService),this.vacantUnitsDataSource.meta$.subscribe(t=>this.meta=t),this.vacantUnitsDataSource.load("",0,0,"id","desc"),this.propertyServerSideFilteringCtrl.valueChanges.pipe((0,c.h)(t=>!!t),(0,u.b)(()=>this.searching=!0),(0,p.R)(this._onDestroy),(0,m.b)(2e3),(0,h.x)(),(0,Z.U)(t=>{t=t.toLowerCase(),this.propertiesFiltered$=this.propertyService.search(t)}),(0,g.g)(500)).subscribe(t=>{this.searching=!1,this.filteredServerSideProperties.next(t)},t=>{this.searching=!1})}onPeriodChange(t){var e;const a=(null===(e=this.adminSummary)||void 0===e?void 0:e.periodical_billing).find(e=>(null==e?void 0:e.period_id)===t);this.billed$=(0,s.of)(null==a?void 0:a.amount_billed_as_currency),this.paid$=(0,s.of)(null==a?void 0:a.amount_paid_as_currency),this.pending$=(0,s.of)(null==a?void 0:a.amount_due_as_currency),this.pieChartData$=(0,s.of)([null==a?void 0:a.amount_due,null==a?void 0:a.amount_paid,null==a?void 0:a.amount_billed])}clearSearch(){this.search.nativeElement.value="",this.loadData()}ngAfterViewInit(){this.paginator.page.pipe((0,u.b)(()=>this.loadData())).subscribe(),this.sort.sortChange.subscribe(()=>this.paginator.pageIndex=0),(0,d.T)(this.sort.sortChange,this.paginator.page).pipe((0,u.b)(()=>this.loadData())).subscribe()}loadData(){this.vacantUnitsDataSource.load("",this.paginator.pageIndex+1,this.paginator.pageSize,this.sort.active,this.sort.direction)}}return t.\u0275fac=function(e){return new(e||t)(q.Y36(n.yh),q.Y36(y.n),q.Y36(i.gz),q.Y36(r.qu),q.Y36(b.b),q.Y36(x))},t.\u0275cmp=q.Xpm({type:t,selectors:[["robi-dashboard"]],viewQuery:function(t,e){if(1&t&&(q.Gf(B,5),q.Gf(_.NW,7),q.Gf(T.YE,7)),2&t){let t;q.iGM(t=q.CRH())&&(e.search=t.first),q.iGM(t=q.CRH())&&(e.paginator=t.first),q.iGM(t=q.CRH())&&(e.sort=t.first)}},decls:116,vars:42,consts:[[1,"main-content"],[1,"container-fluid"],[1,"row"],[1,"col-lg-3","col-md-6","col-sm-6"],[1,"card","card-stats"],[1,"card-header","card-header-accent"],[1,"card-title"],[1,"card-footer"],[1,"stats"],[1,"card-header","card-header-info"],[1,"col-lg-6","col-md-12"],[1,"card"],[1,"card-body"],[1,"col-lg-12","col-md-12","col-sm-12"],[2,"display","block"],["baseChart","",3,"options","data","labels","chartType"],[1,"col-lg-4","col-md-6","col-sm-6"],[3,"formGroup"],[1,"row","col-lg-12"],[1,"col-lg-12"],["color","primary","appearance","outline"],["formControlName","period_id",3,"selectionChange"],["periodSelect",""],[3,"value",4,"ngFor","ngForOf"],["baseChart","",3,"datasets","labels","options","legend","chartType"],[1,"col-lg-12","col-md-12"],[1,"card-category"],[1,"card-body","table-responsive"],["matSort","","matSortActive","unit_name","matSortDirection","desc","matSortDisableClear","",1,"table-hover",3,"dataSource"],["table",""],["matColumnDef","unit_mode"],["mat-sort-header","",4,"matHeaderCellDef"],[4,"matCellDef"],["matColumnDef","unit_type_id"],["matColumnDef","unit_name"],["matColumnDef","property_id"],["matColumnDef","location"],[4,"matHeaderCellDef"],[4,"matHeaderRowDef"],[4,"matRowDef","matRowDefColumns"],[4,"ngIf"],["class","d-flex justify-content-center spinner-container",4,"ngIf"],["showFirstLastButtons","",3,"length","pageIndex","pageSizeOptions"],["pagination",""],[3,"value"],["mat-sort-header",""],[1,"d-flex","justify-content-center","spinner-container"],["color","green","mode","query","value","50","bufferValue","75"]],template:function(t,e){if(1&t){const t=q.EpF();q.TgZ(0,"div",0),q.TgZ(1,"div",1),q.TgZ(2,"div",2),q.TgZ(3,"div",3),q.TgZ(4,"div",4),q.TgZ(5,"div",5),q.TgZ(6,"p",6),q._uU(7),q.qZA(),q.qZA(),q.TgZ(8,"div",7),q.TgZ(9,"div",8),q._uU(10,"Pending Amount"),q.qZA(),q.qZA(),q.qZA(),q.qZA(),q.TgZ(11,"div",3),q.TgZ(12,"div",4),q.TgZ(13,"div",9),q.TgZ(14,"p",6),q._uU(15),q.qZA(),q.qZA(),q.TgZ(16,"div",7),q.TgZ(17,"div",8),q._uU(18,"Properties / Units"),q.qZA(),q.qZA(),q.qZA(),q.qZA(),q.TgZ(19,"div",3),q.TgZ(20,"div",4),q.TgZ(21,"div",5),q.TgZ(22,"p",6),q._uU(23),q.qZA(),q.qZA(),q.TgZ(24,"div",7),q.TgZ(25,"div",8),q._uU(26," Leases"),q.qZA(),q.qZA(),q.qZA(),q.qZA(),q.TgZ(27,"div",3),q.TgZ(28,"div",4),q.TgZ(29,"div",9),q.TgZ(30,"p",6),q._uU(31),q.qZA(),q.qZA(),q.TgZ(32,"div",7),q.TgZ(33,"div",8),q._uU(34,"Tenants"),q.qZA(),q.qZA(),q.qZA(),q.qZA(),q.qZA(),q.TgZ(35,"div",2),q.TgZ(36,"div",10),q.TgZ(37,"div",11),q.TgZ(38,"div",5),q._uU(39," Period Billing "),q.qZA(),q.TgZ(40,"div",12),q.TgZ(41,"div",2),q.TgZ(42,"div",13),q.TgZ(43,"div",14),q._UZ(44,"canvas",15),q.ALo(45,"async"),q.qZA(),q.qZA(),q.qZA(),q.TgZ(46,"div",2),q.TgZ(47,"div",16),q.TgZ(48,"div",4),q.TgZ(49,"div",7),q.TgZ(50,"div",8),q._uU(51),q.ALo(52,"async"),q.qZA(),q.qZA(),q.qZA(),q.qZA(),q.TgZ(53,"div",16),q.TgZ(54,"div",4),q.TgZ(55,"div",7),q.TgZ(56,"div",8),q._uU(57),q.ALo(58,"async"),q.qZA(),q.qZA(),q.qZA(),q.qZA(),q.TgZ(59,"div",16),q.TgZ(60,"div",4),q.TgZ(61,"div",7),q.TgZ(62,"div",8),q._uU(63),q.ALo(64,"async"),q.qZA(),q.qZA(),q.qZA(),q.qZA(),q.qZA(),q.qZA(),q.TgZ(65,"form",17),q.TgZ(66,"div",18),q.TgZ(67,"div",19),q.TgZ(68,"mat-form-field",20),q.TgZ(69,"mat-label"),q._uU(70,"Period"),q.qZA(),q.TgZ(71,"mat-select",21,22),q.NdJ("selectionChange",function(){q.CHM(t);const a=q.MAs(72);return e.onPeriodChange(a.value)}),q.YNc(73,I,2,2,"mat-option",23),q.ALo(74,"async"),q.qZA(),q.qZA(),q.qZA(),q.qZA(),q.qZA(),q.qZA(),q.qZA(),q.TgZ(75,"div",10),q.TgZ(76,"div",11),q.TgZ(77,"div",5),q._uU(78," Period Payments "),q.qZA(),q.TgZ(79,"div",12),q.TgZ(80,"div",14),q._UZ(81,"canvas",24),q.qZA(),q.qZA(),q.qZA(),q.qZA(),q.qZA(),q.TgZ(82,"div",2),q.TgZ(83,"div",25),q.TgZ(84,"div",11),q.TgZ(85,"div",5),q.TgZ(86,"h4",6),q._uU(87,"Vacant Units"),q.qZA(),q.TgZ(88,"p",26),q._uU(89),q.qZA(),q.qZA(),q.TgZ(90,"div",27),q.TgZ(91,"mat-table",28,29),q.ynx(93,30),q.YNc(94,P,2,0,"mat-header-cell",31),q.YNc(95,J,3,3,"mat-cell",32),q.BQk(),q.ynx(96,33),q.YNc(97,O,2,0,"mat-header-cell",31),q.YNc(98,j,2,1,"mat-cell",32),q.BQk(),q.ynx(99,34),q.YNc(100,k,2,0,"mat-header-cell",31),q.YNc(101,F,3,3,"mat-cell",32),q.BQk(),q.ynx(102,35),q.YNc(103,R,2,0,"mat-header-cell",31),q.YNc(104,G,2,2,"mat-cell",32),q.BQk(),q.ynx(105,36),q.YNc(106,H,2,0,"mat-header-cell",37),q.YNc(107,z,2,1,"mat-cell",32),q.BQk(),q.YNc(108,V,1,0,"mat-header-row",38),q.YNc(109,E,1,0,"mat-row",39),q.qZA(),q.YNc(110,M,2,0,"span",40),q.ALo(111,"async"),q.YNc(112,X,2,0,"div",41),q.ALo(113,"async"),q._UZ(114,"mat-paginator",42,43),q.qZA(),q.qZA(),q.qZA(),q.qZA(),q.qZA(),q.qZA()}2&t&&(q.xp6(7),q.Oqu(null==e.adminSummary?null:e.adminSummary.pending_amount),q.xp6(8),q.AsE("",null==e.adminSummary?null:e.adminSummary.total_properties," / ",null==e.adminSummary?null:e.adminSummary.total_units,""),q.xp6(8),q.Oqu(null==e.adminSummary?null:e.adminSummary.total_leases),q.xp6(8),q.Oqu(null==e.adminSummary?null:e.adminSummary.total_tenants),q.xp6(13),q.Q6J("options",e.options)("data",q.lcZ(45,28,e.pieChartData$))("labels",e.pieChartLabels)("chartType",e.pieChartType),q.xp6(7),q.hij("Billed: ",q.lcZ(52,30,e.billed$),""),q.xp6(6),q.hij("Paid: ",q.lcZ(58,32,e.paid$),""),q.xp6(6),q.hij("Pending: ",q.lcZ(64,34,e.pending$),""),q.xp6(2),q.Q6J("formGroup",e.billingForm),q.xp6(8),q.Q6J("ngForOf",q.lcZ(74,36,e.periods$)),q.xp6(8),q.Q6J("datasets",e.barChartData)("labels",e.barChartLabels)("options",e.barChartOptions)("legend",e.barChartLegend)("chartType",e.barChartType),q.xp6(8),q.hij("Total: ",null==e.meta?null:e.meta.total,""),q.xp6(2),q.Q6J("dataSource",e.vacantUnitsDataSource),q.xp6(17),q.Q6J("matHeaderRowDef",e.vacantUnitColumns),q.xp6(1),q.Q6J("matRowDefColumns",e.vacantUnitColumns),q.xp6(1),q.Q6J("ngIf",0===q.lcZ(111,38,e.vacantUnitsDataSource.meta$).total),q.xp6(2),q.Q6J("ngIf",q.lcZ(113,40,null==e.vacantUnitsDataSource?null:e.vacantUnitsDataSource.loading$)||e.loader),q.xp6(2),q.Q6J("length",null==e.meta?null:e.meta.total)("pageIndex",e.pageIndex)("pageSizeOptions",e.pageSizeOptions))},directives:[D.jh,r._Y,r.JL,r.sg,w.KE,w.hX,Y.gD,r.JJ,r.u,$.sg,L.BZ,T.YE,L.w1,L.fO,L.Dz,L.as,L.nj,$.O5,_.NW,N.ey,L.ge,T.nU,L.ev,L.XQ,L.Gk,Q.pW],pipes:[$.Ov,$.rS],styles:[""]}),t})()}];var K=a(83893),tt=a(52218);let et=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=q.oAB({type:t}),t.\u0275inj=q.cJS({imports:[[K.m,i.Bz.forChild(W),tt.Co,D.m9]]}),t})()}}]);