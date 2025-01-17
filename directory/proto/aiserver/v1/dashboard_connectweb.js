import '../../../require.js';
import '../../../exports.js';
import './dashboard_pb.js';
import '../../../external/bufbuild/protobuf.js';
define(de[1107], he([1, 0, 894, 86]), function (ce, e, t, i) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$X$ = void 0),
				(e.$X$ = {
					typeName: "aiserver.v1.DashboardService",
					methods: {
						getTeams: {
							name: "GetTeams",
							I: t.$_0,
							O: t.$a$,
							kind: i.MethodKind.Unary,
						},
						getActivationCheckoutUrl: {
							name: "GetActivationCheckoutUrl",
							I: t.$b$,
							O: t.$c$,
							kind: i.MethodKind.Unary,
						},
						getTeamCustomerPortalUrl: {
							name: "GetTeamCustomerPortalUrl",
							I: t.$d$,
							O: t.$e$,
							kind: i.MethodKind.Unary,
						},
						getTeamMembers: {
							name: "GetTeamMembers",
							I: t.$f$,
							O: t.$h$,
							kind: i.MethodKind.Unary,
						},
						sendTeamInvite: {
							name: "SendTeamInvite",
							I: t.$k$,
							O: t.$l$,
							kind: i.MethodKind.Unary,
						},
						getTeamInviteLink: {
							name: "GetTeamInviteLink",
							I: t.$i$,
							O: t.$j$,
							kind: i.MethodKind.Unary,
						},
						acceptInvite: {
							name: "AcceptInvite",
							I: t.$m$,
							O: t.$n$,
							kind: i.MethodKind.Unary,
						},
						createTeam: {
							name: "CreateTeam",
							I: t.$o$,
							O: t.$p$,
							kind: i.MethodKind.Unary,
						},
						changeSeat: {
							name: "ChangeSeat",
							I: t.$u$,
							O: t.$v$,
							kind: i.MethodKind.Unary,
						},
						changeTeamSubscription: {
							name: "ChangeTeamSubscription",
							I: t.$w$,
							O: t.$x$,
							kind: i.MethodKind.Unary,
						},
						updateRole: {
							name: "UpdateRole",
							I: t.$q$,
							O: t.$r$,
							kind: i.MethodKind.Unary,
						},
						removeMember: {
							name: "RemoveMember",
							I: t.$s$,
							O: t.$t$,
							kind: i.MethodKind.Unary,
						},
						getTeamUsage: {
							name: "GetTeamUsage",
							I: t.$y$,
							O: t.$z$,
							kind: i.MethodKind.Unary,
						},
						getDailyTeamUsage: {
							name: "GetDailyTeamUsage",
							I: t.$E$,
							O: t.$F$,
							kind: i.MethodKind.Unary,
						},
						getSignUpType: {
							name: "GetSignUpType",
							I: t.$C$,
							O: t.$D$,
							kind: i.MethodKind.Unary,
						},
						getHardLimit: {
							name: "GetHardLimit",
							I: t.$70,
							O: t.$80,
							kind: i.MethodKind.Unary,
						},
						setHardLimit: {
							name: "SetHardLimit",
							I: t.$90,
							O: t.$00,
							kind: i.MethodKind.Unary,
						},
						deleteAccount: {
							name: "DeleteAccount",
							I: t.$P0,
							O: t.$Q0,
							kind: i.MethodKind.Unary,
						},
						getMonthlyInvoice: {
							name: "GetMonthlyInvoice",
							I: t.$30,
							O: t.$40,
							kind: i.MethodKind.Unary,
						},
						getPricingHistory: {
							name: "GetPricingHistory",
							I: t.$Z0,
							O: t.$10,
							kind: i.MethodKind.Unary,
						},
						createTeamWithFreeTrial: {
							name: "CreateTeamWithFreeTrial",
							I: t.$X0,
							O: t.$Y0,
							kind: i.MethodKind.Unary,
						},
						getTeamHasValidPaymentMethod: {
							name: "GetTeamHasValidPaymentMethod",
							I: t.$V0,
							O: t.$W0,
							kind: i.MethodKind.Unary,
						},
						getTeamPrivacyModeForced: {
							name: "GetTeamPrivacyModeForced",
							I: t.$T0,
							O: t.$U0,
							kind: i.MethodKind.Unary,
						},
						switchTeamPrivacyMode: {
							name: "SwitchTeamPrivacyMode",
							I: t.$R0,
							O: t.$S0,
							kind: i.MethodKind.Unary,
						},
						updateFastRequests: {
							name: "UpdateFastRequests",
							I: t.$L0,
							O: t.$M0,
							kind: i.MethodKind.Unary,
						},
						getFastRequests: {
							name: "GetFastRequests",
							I: t.$N0,
							O: t.$O0,
							kind: i.MethodKind.Unary,
						},
						getDownloadLink: {
							name: "GetDownloadLink",
							I: t.$J$,
							O: t.$K$,
							kind: i.MethodKind.Unary,
						},
						getSsoConfigurationLinks: {
							name: "GetSsoConfigurationLinks",
							I: t.$L$,
							O: t.$M$,
							kind: i.MethodKind.Unary,
						},
						setAdminOnlyUsagePricing: {
							name: "SetAdminOnlyUsagePricing",
							I: t.$N$,
							O: t.$O$,
							kind: i.MethodKind.Unary,
						},
						getYearlyUpgradeEligibility: {
							name: "GetYearlyUpgradeEligibility",
							I: t.$P$,
							O: t.$Q$,
							kind: i.MethodKind.Unary,
						},
						upgradeToYearly: {
							name: "UpgradeToYearly",
							I: t.$R$,
							O: t.$S$,
							kind: i.MethodKind.Unary,
						},
						getUsageBasedPremiumRequests: {
							name: "GetUsageBasedPremiumRequests",
							I: t.$T$,
							O: t.$U$,
							kind: i.MethodKind.Unary,
						},
						setUsageBasedPremiumRequests: {
							name: "SetUsageBasedPremiumRequests",
							I: t.$V$,
							O: t.$W$,
							kind: i.MethodKind.Unary,
						},
					},
				});
		}),
		