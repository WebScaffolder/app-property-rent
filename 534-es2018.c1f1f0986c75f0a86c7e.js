"use strict";(self.webpackChunkmaterial_dashboard_angular=self.webpackChunkmaterial_dashboard_angular||[]).push([[534],{33738:function(r,o,t){t.r(o),t.d(o,{TenantProfileModule:function(){return C}});var e=t(39895),a=t(3679),s=t(2603),n=t(37716),l=t(86710),i=t(65),m=t(91841);let f=(()=>{class r extends i.b{constructor(r){super(r,"tenant_profile"),this.localHttpClient=r}}return r.\u0275fac=function(o){return new(o||r)(n.LFG(m.eN))},r.\u0275prov=n.Yz7({token:r,factory:r.\u0275fac,providedIn:"root"}),r})();var u=t(57404),d=t(98295),c=t(49983),p=t(38583);function Z(r,o){if(1&r&&(n.TgZ(0,"mat-error",29),n._uU(1),n.qZA()),2&r){const r=n.oxw();n.xp6(1),n.Oqu(r.formErrors.first_name)}}function g(r,o){if(1&r&&(n.TgZ(0,"mat-error",29),n._uU(1),n.qZA()),2&r){const r=n.oxw();n.xp6(1),n.Oqu(r.formErrors.middle_name)}}function _(r,o){if(1&r&&(n.TgZ(0,"mat-error",29),n._uU(1),n.qZA()),2&r){const r=n.oxw();n.xp6(1),n.Oqu(r.formErrors.last_name)}}function h(r,o){if(1&r&&(n.TgZ(0,"mat-error",29),n._uU(1),n.qZA()),2&r){const r=n.oxw();n.xp6(1),n.Oqu(r.formErrors.email)}}function q(r,o){if(1&r&&(n.TgZ(0,"mat-error",29),n._uU(1),n.qZA()),2&r){const r=n.oxw();n.xp6(1),n.Oqu(r.formErrors.phone)}}function A(r,o){if(1&r&&(n.TgZ(0,"mat-error",29),n._uU(1),n.qZA()),2&r){const r=n.oxw();n.xp6(1),n.Oqu(r.formErrors.country)}}function T(r,o){if(1&r&&(n.TgZ(0,"mat-error",29),n._uU(1),n.qZA()),2&r){const r=n.oxw();n.xp6(1),n.Oqu(r.formErrors.city)}}function E(r,o){if(1&r&&(n.TgZ(0,"mat-error",29),n._uU(1),n.qZA()),2&r){const r=n.oxw();n.xp6(1),n.Oqu(r.formErrors.state)}}function v(r,o){if(1&r&&(n.TgZ(0,"mat-error",29),n._uU(1),n.qZA()),2&r){const r=n.oxw();n.xp6(1),n.Oqu(r.formErrors.physical_address)}}function w(r,o){if(1&r&&(n.TgZ(0,"mat-error",29),n._uU(1),n.qZA()),2&r){const r=n.oxw();n.xp6(1),n.Oqu(r.formErrors.postal_address)}}function U(r,o){if(1&r&&(n.TgZ(0,"mat-error",29),n._uU(1),n.qZA()),2&r){const r=n.oxw();n.xp6(1),n.Oqu(r.formErrors.postal_code)}}function x(r,o){if(1&r&&(n.TgZ(0,"mat-error",29),n._uU(1),n.qZA()),2&r){const r=n.oxw();n.xp6(1),n.Oqu(r.formErrors.current_password)}}function N(r,o){if(1&r&&(n.TgZ(0,"mat-error",29),n._uU(1),n.qZA()),2&r){const r=n.oxw();n.xp6(1),n.Oqu(r.formErrors.password)}}function y(r,o){if(1&r&&(n.TgZ(0,"mat-error",29),n._uU(1),n.qZA()),2&r){const r=n.oxw();n.xp6(1),n.Oqu(r.formErrors.password_confirmation)}}const b=e.Bz.forChild([{path:"",component:(()=>{class r{constructor(r,o,t,e,s){this.store=r,this.fb=o,this.route=t,this.tenantProfileService=e,this.notification=s,this.loader=!1,this.form=this.fb.group({first_name:["",[a.kI.required,a.kI.minLength(2)]],middle_name:[""],last_name:[""],email:[""],phone:[""],country:[""],city:[""],state:[""],physical_address:[""],postal_address:[""],postal_code:[""],current_password:[""],password:[""],password_confirmation:[""]})}ngOnInit(){this.route.snapshot.data.profile&&(this.profile=this.route.snapshot.data.profile,this.prePopulateForm(this.profile))}prePopulateForm(r){this.profile=r,this.form.patchValue({first_name:this.profile.first_name,middle_name:this.profile.middle_name,last_name:this.profile.last_name,email:this.profile.email,phone:this.profile.phone,country:this.profile.country,city:this.profile.city,state:this.profile.state,physical_address:this.profile.physical_address,postal_address:this.profile.postal_address,postal_code:this.profile.postal_code})}update(){const r=Object.assign({},this.profile,this.form.value);this.loader=!0,this.tenantProfileService.update(r).subscribe(r=>{this.loader=!1,this.notification.showNotification("success","Success !! Profile has been updated."),this.store.dispatch(s.u.actionLogout())},r=>{var o;if(this.loader=!1,0!==r.payment&&(this.formErrors=r,this.formErrors))for(const t in this.formErrors)this.form&&(null===(o=this.form.controls[t])||void 0===o||o.markAsTouched(),this.form.controls[t].setErrors({incorrect:!0}))})}}return r.\u0275fac=function(o){return new(o||r)(n.Y36(l.yh),n.Y36(a.qu),n.Y36(e.gz),n.Y36(f),n.Y36(u.g))},r.\u0275cmp=n.Xpm({type:r,selectors:[["robi-user-profile"]],decls:106,vars:16,consts:[[1,"main-content"],[1,"container-fluid"],[1,"row"],[1,"col-md-8"],[1,"card"],["color","accent",1,"card-header","card-header-info"],[1,"card-title"],[1,"card-category"],[1,"card-body",3,"formGroup","ngSubmit"],[1,"col-6"],["color","primary","appearance","outline",1,"full-width"],["matInput","","formControlName","first_name","placeholder","First Name"],["align","start","class","form__error",4,"ngIf"],["matInput","","formControlName","middle_name","placeholder","Middle Name"],["matInput","","formControlName","last_name","placeholder","Last Name"],["matInput","","formControlName","email","placeholder","Email"],["matInput","","formControlName","phone","placeholder","Phone"],["matInput","","formControlName","country","placeholder","Country"],["matInput","","formControlName","city","placeholder","City"],["matInput","","formControlName","state","placeholder","State"],[1,"col-12"],["matInput","","formControlName","physical_address","placeholder","Physical Address"],["matInput","","formControlName","postal_address","placeholder","Postal Address"],["matInput","","formControlName","postal_code","placeholder","Postal Code"],[1,"col-md-4"],["matInput","","formControlName","current_password","type","password","placeholder","Current Password"],["matInput","","formControlName","password","type","password","placeholder","New Password"],["matInput","","formControlName","password_confirmation","type","password","placeholder","Confirm New Password"],[1,"btn","mat-raised-button","mat-primary","pull-right",3,"disabled","click"],["align","start",1,"form__error"]],template:function(r,o){1&r&&(n.TgZ(0,"div",0),n.TgZ(1,"div",1),n.TgZ(2,"div",2),n.TgZ(3,"div",3),n.TgZ(4,"div",4),n.TgZ(5,"div",5),n.TgZ(6,"h4",6),n._uU(7,"Edit Profile"),n.qZA(),n.TgZ(8,"p",7),n._uU(9,"Complete your profile"),n.qZA(),n.qZA(),n.TgZ(10,"div",8),n.NdJ("ngSubmit",function(){return o.update()}),n.TgZ(11,"div",2),n.TgZ(12,"div",9),n.TgZ(13,"mat-form-field",10),n.TgZ(14,"mat-label"),n._uU(15,"First Name"),n.qZA(),n._UZ(16,"input",11),n.YNc(17,Z,2,1,"mat-error",12),n.qZA(),n.qZA(),n.TgZ(18,"div",9),n.TgZ(19,"mat-form-field",10),n.TgZ(20,"mat-label"),n._uU(21,"Middle Name"),n.qZA(),n._UZ(22,"input",13),n.YNc(23,g,2,1,"mat-error",12),n.qZA(),n.qZA(),n.qZA(),n.TgZ(24,"div",2),n.TgZ(25,"div",9),n.TgZ(26,"mat-form-field",10),n.TgZ(27,"mat-label"),n._uU(28,"Last Name"),n.qZA(),n._UZ(29,"input",14),n.YNc(30,_,2,1,"mat-error",12),n.qZA(),n.qZA(),n.TgZ(31,"div",9),n.TgZ(32,"mat-form-field",10),n.TgZ(33,"mat-label"),n._uU(34,"Email"),n.qZA(),n._UZ(35,"input",15),n.YNc(36,h,2,1,"mat-error",12),n.qZA(),n.qZA(),n.qZA(),n.TgZ(37,"div",2),n.TgZ(38,"div",9),n.TgZ(39,"mat-form-field",10),n.TgZ(40,"mat-label"),n._uU(41,"Phone"),n.qZA(),n._UZ(42,"input",16),n.YNc(43,q,2,1,"mat-error",12),n.qZA(),n.qZA(),n.TgZ(44,"div",9),n.TgZ(45,"mat-form-field",10),n.TgZ(46,"mat-label"),n._uU(47,"Country"),n.qZA(),n._UZ(48,"input",17),n.YNc(49,A,2,1,"mat-error",12),n.qZA(),n.qZA(),n.qZA(),n.TgZ(50,"div",2),n.TgZ(51,"div",9),n.TgZ(52,"mat-form-field",10),n.TgZ(53,"mat-label"),n._uU(54,"City"),n.qZA(),n._UZ(55,"input",18),n.YNc(56,T,2,1,"mat-error",12),n.qZA(),n.qZA(),n.TgZ(57,"div",9),n.TgZ(58,"mat-form-field",10),n.TgZ(59,"mat-label"),n._uU(60,"State"),n.qZA(),n._UZ(61,"input",19),n.YNc(62,E,2,1,"mat-error",12),n.qZA(),n.qZA(),n.qZA(),n.TgZ(63,"div",2),n.TgZ(64,"div",20),n.TgZ(65,"mat-form-field",10),n.TgZ(66,"mat-label"),n._uU(67,"Physical Address"),n.qZA(),n._UZ(68,"input",21),n.YNc(69,v,2,1,"mat-error",12),n.qZA(),n.qZA(),n.qZA(),n.TgZ(70,"div",2),n.TgZ(71,"div",20),n.TgZ(72,"mat-form-field",10),n.TgZ(73,"mat-label"),n._uU(74,"Postal Address"),n.qZA(),n._UZ(75,"input",22),n.YNc(76,w,2,1,"mat-error",12),n.qZA(),n.qZA(),n.qZA(),n.TgZ(77,"div",2),n.TgZ(78,"div",20),n.TgZ(79,"mat-form-field",10),n.TgZ(80,"mat-label"),n._uU(81,"Postal Code"),n.qZA(),n._UZ(82,"input",23),n.YNc(83,U,2,1,"mat-error",12),n.qZA(),n.qZA(),n.qZA(),n.TgZ(84,"div",2),n.TgZ(85,"div",24),n.TgZ(86,"mat-form-field",10),n.TgZ(87,"mat-label"),n._uU(88,"Current Password"),n.qZA(),n._UZ(89,"input",25),n.YNc(90,x,2,1,"mat-error",12),n.qZA(),n.qZA(),n.TgZ(91,"div",24),n.TgZ(92,"mat-form-field",10),n.TgZ(93,"mat-label"),n._uU(94,"New Password"),n.qZA(),n._UZ(95,"input",26),n.YNc(96,N,2,1,"mat-error",12),n.qZA(),n.qZA(),n.TgZ(97,"div",24),n.TgZ(98,"mat-form-field",10),n.TgZ(99,"mat-label"),n._uU(100,"Confirm New Password"),n.qZA(),n._UZ(101,"input",27),n.YNc(102,y,2,1,"mat-error",12),n.qZA(),n.qZA(),n.qZA(),n.TgZ(103,"button",28),n.NdJ("click",function(){return o.update()}),n._uU(104,"Update Profile"),n.qZA(),n.qZA(),n.qZA(),n.qZA(),n._UZ(105,"div",24),n.qZA(),n.qZA(),n.qZA()),2&r&&(n.xp6(10),n.Q6J("formGroup",o.form),n.xp6(7),n.Q6J("ngIf",null==o.formErrors?null:o.formErrors.first_name),n.xp6(6),n.Q6J("ngIf",null==o.formErrors?null:o.formErrors.middle_name),n.xp6(7),n.Q6J("ngIf",null==o.formErrors?null:o.formErrors.last_name),n.xp6(6),n.Q6J("ngIf",null==o.formErrors?null:o.formErrors.email),n.xp6(7),n.Q6J("ngIf",null==o.formErrors?null:o.formErrors.phone),n.xp6(6),n.Q6J("ngIf",null==o.formErrors?null:o.formErrors.country),n.xp6(7),n.Q6J("ngIf",null==o.formErrors?null:o.formErrors.city),n.xp6(6),n.Q6J("ngIf",null==o.formErrors?null:o.formErrors.state),n.xp6(7),n.Q6J("ngIf",null==o.formErrors?null:o.formErrors.physical_address),n.xp6(7),n.Q6J("ngIf",null==o.formErrors?null:o.formErrors.postal_address),n.xp6(7),n.Q6J("ngIf",null==o.formErrors?null:o.formErrors.postal_code),n.xp6(7),n.Q6J("ngIf",null==o.formErrors?null:o.formErrors.current_password),n.xp6(6),n.Q6J("ngIf",null==o.formErrors?null:o.formErrors.password),n.xp6(6),n.Q6J("ngIf",null==o.formErrors?null:o.formErrors.password_confirmation),n.xp6(1),n.Q6J("disabled",!o.form.valid||o.loader))},directives:[a.JL,a.sg,d.KE,d.hX,c.Nt,a.Fj,a.JJ,a.u,p.O5,d.TO],styles:[""]}),r})(),resolve:{profile:(()=>{class r{constructor(r){this.tenantProfileService=r}resolve(r,o){return this.tenantProfileService.getAll("",1,1)}}return r.\u0275fac=function(o){return new(o||r)(n.LFG(f))},r.\u0275prov=n.Yz7({token:r,factory:r.\u0275fac,providedIn:"root"}),r})()}}]);var I=t(83893);let C=(()=>{class r{constructor(){}}return r.\u0275fac=function(o){return new(o||r)},r.\u0275mod=n.oAB({type:r}),r.\u0275inj=n.cJS({imports:[[I.m,b]]}),r})()}}]);