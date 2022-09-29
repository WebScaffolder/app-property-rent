"use strict";(self.webpackChunkmaterial_dashboard_angular=self.webpackChunkmaterial_dashboard_angular||[]).push([[298],{41298:function(r,o,t){t.r(o),t.d(o,{UserProfileModule:function(){return O}});var e=t(39895),a=t(3679),s=t(2603),l=t(37716),i=t(86710),n=t(26215),m=t(65),f=t(91841);let u=(()=>{class r extends m.b{constructor(r){super(r,"user_profile"),this.selectedUserProfileSource=new n.X(null),this.selectedUserProfileChanges$=this.selectedUserProfileSource.asObservable(),this.localHttpClient=r}changeSelectedUserProfile(r){this.selectedUserProfileSource.next(r)}}return r.\u0275fac=function(o){return new(o||r)(l.LFG(f.eN))},r.\u0275prov=l.Yz7({token:r,factory:r.\u0275fac,providedIn:"root"}),r})();var d=t(57404),c=t(98295),p=t(49983),Z=t(38583),g=t(12178);function _(r,o){if(1&r&&(l.TgZ(0,"mat-error",31),l._uU(1),l.qZA()),2&r){const r=l.oxw();l.xp6(1),l.Oqu(r.formErrors.role)}}function h(r,o){if(1&r&&(l.TgZ(0,"mat-error",31),l._uU(1),l.qZA()),2&r){const r=l.oxw();l.xp6(1),l.Oqu(r.formErrors.first_name)}}function q(r,o){if(1&r&&(l.TgZ(0,"mat-error",31),l._uU(1),l.qZA()),2&r){const r=l.oxw();l.xp6(1),l.Oqu(r.formErrors.middle_name)}}function A(r,o){if(1&r&&(l.TgZ(0,"mat-error",31),l._uU(1),l.qZA()),2&r){const r=l.oxw();l.xp6(1),l.Oqu(r.formErrors.last_name)}}function T(r,o){if(1&r&&(l.TgZ(0,"mat-error",31),l._uU(1),l.qZA()),2&r){const r=l.oxw();l.xp6(1),l.Oqu(r.formErrors.email)}}function v(r,o){if(1&r&&(l.TgZ(0,"mat-error",31),l._uU(1),l.qZA()),2&r){const r=l.oxw();l.xp6(1),l.Oqu(r.formErrors.phone)}}function U(r,o){if(1&r&&(l.TgZ(0,"mat-error",31),l._uU(1),l.qZA()),2&r){const r=l.oxw();l.xp6(1),l.Oqu(r.formErrors.country)}}function E(r,o){if(1&r&&(l.TgZ(0,"mat-error",31),l._uU(1),l.qZA()),2&r){const r=l.oxw();l.xp6(1),l.Oqu(r.formErrors.city)}}function x(r,o){if(1&r&&(l.TgZ(0,"mat-error",31),l._uU(1),l.qZA()),2&r){const r=l.oxw();l.xp6(1),l.Oqu(r.formErrors.state)}}function w(r,o){if(1&r&&(l.TgZ(0,"mat-error",31),l._uU(1),l.qZA()),2&r){const r=l.oxw();l.xp6(1),l.Oqu(r.formErrors.physical_address)}}function N(r,o){if(1&r&&(l.TgZ(0,"mat-error",31),l._uU(1),l.qZA()),2&r){const r=l.oxw();l.xp6(1),l.Oqu(r.formErrors.postal_address)}}function y(r,o){if(1&r&&(l.TgZ(0,"mat-error",31),l._uU(1),l.qZA()),2&r){const r=l.oxw();l.xp6(1),l.Oqu(r.formErrors.postal_code)}}function b(r,o){if(1&r&&(l.TgZ(0,"mat-error",31),l._uU(1),l.qZA()),2&r){const r=l.oxw();l.xp6(1),l.Oqu(r.formErrors.current_password)}}function I(r,o){if(1&r&&(l.TgZ(0,"mat-error",31),l._uU(1),l.qZA()),2&r){const r=l.oxw();l.xp6(1),l.Oqu(r.formErrors.password)}}function C(r,o){if(1&r&&(l.TgZ(0,"mat-error",31),l._uU(1),l.qZA()),2&r){const r=l.oxw();l.xp6(1),l.Oqu(r.formErrors.password_confirmation)}}function P(r,o){1&r&&(l.TgZ(0,"div",32),l._UZ(1,"mat-progress-bar",33),l.qZA())}const J=e.Bz.forChild([{path:"",component:(()=>{class r{constructor(r,o,t,e,s){this.store=r,this.fb=o,this.route=t,this.userProfileService=e,this.notification=s,this.loader=!1,this.form=this.fb.group({role:[{value:"",disabled:!0}],first_name:["",[a.kI.required,a.kI.minLength(2)]],middle_name:[""],last_name:[""],email:[""],phone:[""],country:[""],city:[""],state:[""],physical_address:[""],postal_address:[""],postal_code:[""],current_password:[""],password:[""],password_confirmation:[""]})}ngOnInit(){this.route.snapshot.data.profile&&(this.profile=this.route.snapshot.data.profile,this.prePopulateForm(this.profile))}prePopulateForm(r){var o,t;this.profile=r,this.form.patchValue({role:null===(t=null===(o=this.profile)||void 0===o?void 0:o.role)||void 0===t?void 0:t.display_name,first_name:this.profile.first_name,middle_name:this.profile.middle_name,last_name:this.profile.last_name,email:this.profile.email,phone:this.profile.phone,country:this.profile.country,city:this.profile.city,state:this.profile.state,physical_address:this.profile.physical_address,postal_address:this.profile.postal_address,postal_code:this.profile.postal_code})}update(){const r=Object.assign({},this.profile,this.form.value);this.loader=!0,this.userProfileService.update(r).subscribe(r=>{this.loader=!1,this.notification.showNotification("success","Success !! User Profile has been updated."),this.store.dispatch(s.u.actionLogout())},r=>{var o;if(this.loader=!1,0!==r.payment&&(this.formErrors=r,this.formErrors))for(const t in this.formErrors)this.form&&(null===(o=this.form.controls[t])||void 0===o||o.markAsTouched(),this.form.controls[t].setErrors({incorrect:!0}))})}}return r.\u0275fac=function(o){return new(o||r)(l.Y36(i.yh),l.Y36(a.qu),l.Y36(e.gz),l.Y36(u),l.Y36(d.g))},r.\u0275cmp=l.Xpm({type:r,selectors:[["robi-user-profile"]],decls:114,vars:18,consts:[[1,"main-content"],[1,"container-fluid"],[1,"row"],[1,"col-md-8"],[1,"card"],["color","accent",1,"card-header","card-header-info"],[1,"card-title"],[1,"card-category"],[1,"card-body",3,"formGroup","ngSubmit"],[1,"col-12"],["color","primary","appearance","outline",1,"full-width"],["matInput","","formControlName","role","placeholder","Role"],["align","start","class","form__error",4,"ngIf"],[1,"col-6"],["matInput","","formControlName","first_name","placeholder","First Name"],["matInput","","formControlName","middle_name","placeholder","Middle Name"],["matInput","","formControlName","last_name","placeholder","Last Name"],["matInput","","formControlName","email","placeholder","Email"],["matInput","","formControlName","phone","placeholder","Phone"],["matInput","","formControlName","country","placeholder","Country"],["matInput","","formControlName","city","placeholder","City"],["matInput","","formControlName","state","placeholder","State"],["matInput","","formControlName","physical_address","placeholder","Physical Address"],["matInput","","formControlName","postal_address","placeholder","Postal Address"],["matInput","","formControlName","postal_code","placeholder","Postal Code"],[1,"col-md-4"],["matInput","","formControlName","current_password","type","password","placeholder","Current Password"],["matInput","","formControlName","password","type","password","placeholder","New Password"],["matInput","","formControlName","password_confirmation","type","password","placeholder","Confirm New Password"],["class","d-flex justify-content-center spinner-container mb-2",4,"ngIf"],[1,"btn","mat-raised-button","mat-primary","pull-right",3,"disabled","click"],["align","start",1,"form__error"],[1,"d-flex","justify-content-center","spinner-container","mb-2"],["color","primary","mode","query","value","50","bufferValue","75"]],template:function(r,o){1&r&&(l.TgZ(0,"div",0),l.TgZ(1,"div",1),l.TgZ(2,"div",2),l.TgZ(3,"div",3),l.TgZ(4,"div",4),l.TgZ(5,"div",5),l.TgZ(6,"h4",6),l._uU(7,"Edit Profile"),l.qZA(),l.TgZ(8,"p",7),l._uU(9,"Complete your profile"),l.qZA(),l.qZA(),l.TgZ(10,"div",8),l.NdJ("ngSubmit",function(){return o.update()}),l.TgZ(11,"div",2),l.TgZ(12,"div",9),l.TgZ(13,"mat-form-field",10),l.TgZ(14,"mat-label"),l._uU(15,"Role"),l.qZA(),l._UZ(16,"input",11),l.YNc(17,_,2,1,"mat-error",12),l.qZA(),l.qZA(),l.qZA(),l.TgZ(18,"div",2),l.TgZ(19,"div",13),l.TgZ(20,"mat-form-field",10),l.TgZ(21,"mat-label"),l._uU(22,"First Name"),l.qZA(),l._UZ(23,"input",14),l.YNc(24,h,2,1,"mat-error",12),l.qZA(),l.qZA(),l.TgZ(25,"div",13),l.TgZ(26,"mat-form-field",10),l.TgZ(27,"mat-label"),l._uU(28,"Middle Name"),l.qZA(),l._UZ(29,"input",15),l.YNc(30,q,2,1,"mat-error",12),l.qZA(),l.qZA(),l.qZA(),l.TgZ(31,"div",2),l.TgZ(32,"div",13),l.TgZ(33,"mat-form-field",10),l.TgZ(34,"mat-label"),l._uU(35,"Last Name"),l.qZA(),l._UZ(36,"input",16),l.YNc(37,A,2,1,"mat-error",12),l.qZA(),l.qZA(),l.TgZ(38,"div",13),l.TgZ(39,"mat-form-field",10),l.TgZ(40,"mat-label"),l._uU(41,"Email"),l.qZA(),l._UZ(42,"input",17),l.YNc(43,T,2,1,"mat-error",12),l.qZA(),l.qZA(),l.qZA(),l.TgZ(44,"div",2),l.TgZ(45,"div",13),l.TgZ(46,"mat-form-field",10),l.TgZ(47,"mat-label"),l._uU(48,"Phone"),l.qZA(),l._UZ(49,"input",18),l.YNc(50,v,2,1,"mat-error",12),l.qZA(),l.qZA(),l.TgZ(51,"div",13),l.TgZ(52,"mat-form-field",10),l.TgZ(53,"mat-label"),l._uU(54,"Country"),l.qZA(),l._UZ(55,"input",19),l.YNc(56,U,2,1,"mat-error",12),l.qZA(),l.qZA(),l.qZA(),l.TgZ(57,"div",2),l.TgZ(58,"div",13),l.TgZ(59,"mat-form-field",10),l.TgZ(60,"mat-label"),l._uU(61,"City"),l.qZA(),l._UZ(62,"input",20),l.YNc(63,E,2,1,"mat-error",12),l.qZA(),l.qZA(),l.TgZ(64,"div",13),l.TgZ(65,"mat-form-field",10),l.TgZ(66,"mat-label"),l._uU(67,"State"),l.qZA(),l._UZ(68,"input",21),l.YNc(69,x,2,1,"mat-error",12),l.qZA(),l.qZA(),l.qZA(),l.TgZ(70,"div",2),l.TgZ(71,"div",9),l.TgZ(72,"mat-form-field",10),l.TgZ(73,"mat-label"),l._uU(74,"Physical Address"),l.qZA(),l._UZ(75,"input",22),l.YNc(76,w,2,1,"mat-error",12),l.qZA(),l.qZA(),l.qZA(),l.TgZ(77,"div",2),l.TgZ(78,"div",9),l.TgZ(79,"mat-form-field",10),l.TgZ(80,"mat-label"),l._uU(81,"Postal Address"),l.qZA(),l._UZ(82,"input",23),l.YNc(83,N,2,1,"mat-error",12),l.qZA(),l.qZA(),l.qZA(),l.TgZ(84,"div",2),l.TgZ(85,"div",9),l.TgZ(86,"mat-form-field",10),l.TgZ(87,"mat-label"),l._uU(88,"Postal Code"),l.qZA(),l._UZ(89,"input",24),l.YNc(90,y,2,1,"mat-error",12),l.qZA(),l.qZA(),l.qZA(),l.TgZ(91,"div",2),l.TgZ(92,"div",25),l.TgZ(93,"mat-form-field",10),l.TgZ(94,"mat-label"),l._uU(95,"Current Password"),l.qZA(),l._UZ(96,"input",26),l.YNc(97,b,2,1,"mat-error",12),l.qZA(),l.qZA(),l.TgZ(98,"div",25),l.TgZ(99,"mat-form-field",10),l.TgZ(100,"mat-label"),l._uU(101,"New Password"),l.qZA(),l._UZ(102,"input",27),l.YNc(103,I,2,1,"mat-error",12),l.qZA(),l.qZA(),l.TgZ(104,"div",25),l.TgZ(105,"mat-form-field",10),l.TgZ(106,"mat-label"),l._uU(107,"Confirm New Password"),l.qZA(),l._UZ(108,"input",28),l.YNc(109,C,2,1,"mat-error",12),l.qZA(),l.qZA(),l.qZA(),l.YNc(110,P,2,0,"div",29),l.TgZ(111,"button",30),l.NdJ("click",function(){return o.update()}),l._uU(112,"Update Profile"),l.qZA(),l.qZA(),l.qZA(),l.qZA(),l._UZ(113,"div",25),l.qZA(),l.qZA(),l.qZA()),2&r&&(l.xp6(10),l.Q6J("formGroup",o.form),l.xp6(7),l.Q6J("ngIf",null==o.formErrors?null:o.formErrors.role),l.xp6(7),l.Q6J("ngIf",null==o.formErrors?null:o.formErrors.first_name),l.xp6(6),l.Q6J("ngIf",null==o.formErrors?null:o.formErrors.middle_name),l.xp6(7),l.Q6J("ngIf",null==o.formErrors?null:o.formErrors.last_name),l.xp6(6),l.Q6J("ngIf",null==o.formErrors?null:o.formErrors.email),l.xp6(7),l.Q6J("ngIf",null==o.formErrors?null:o.formErrors.phone),l.xp6(6),l.Q6J("ngIf",null==o.formErrors?null:o.formErrors.country),l.xp6(7),l.Q6J("ngIf",null==o.formErrors?null:o.formErrors.city),l.xp6(6),l.Q6J("ngIf",null==o.formErrors?null:o.formErrors.state),l.xp6(7),l.Q6J("ngIf",null==o.formErrors?null:o.formErrors.physical_address),l.xp6(7),l.Q6J("ngIf",null==o.formErrors?null:o.formErrors.postal_address),l.xp6(7),l.Q6J("ngIf",null==o.formErrors?null:o.formErrors.postal_code),l.xp6(7),l.Q6J("ngIf",null==o.formErrors?null:o.formErrors.current_password),l.xp6(6),l.Q6J("ngIf",null==o.formErrors?null:o.formErrors.password),l.xp6(6),l.Q6J("ngIf",null==o.formErrors?null:o.formErrors.password_confirmation),l.xp6(1),l.Q6J("ngIf",o.loader),l.xp6(1),l.Q6J("disabled",!o.form.valid||o.loader))},directives:[a.JL,a.sg,c.KE,c.hX,p.Nt,a.Fj,a.JJ,a.u,Z.O5,c.TO,g.pW],styles:[""]}),r})(),resolve:{profile:(()=>{class r{constructor(r){this.userProfileService=r}resolve(r,o){return this.userProfileService.getAll("",1,1)}}return r.\u0275fac=function(o){return new(o||r)(l.LFG(u))},r.\u0275prov=l.Yz7({token:r,factory:r.\u0275fac,providedIn:"root"}),r})()}}]);var Y=t(83893);let O=(()=>{class r{constructor(){}}return r.\u0275fac=function(o){return new(o||r)},r.\u0275mod=l.oAB({type:r}),r.\u0275inj=l.cJS({imports:[[Y.m,J]]}),r})()}}]);