import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../nls.js';
import '../../../../base/common/resources.js';
import '../../../../platform/markers/common/markers.js';
define(de[799], he([1, 0, 4, 19, 90]), function (ce, e, t, i, w) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }), (t = mt(t));
			class E {
				static {
					this.MARKERS_PANEL_TOGGLE_LABEL = t.localize(7501, null);
				}
				static {
					this.MARKERS_PANEL_SHOW_LABEL = t.localize2(
						7546,
						"Focus Problems (Errors, Warnings, Infos)",
					);
				}
				static {
					this.PROBLEMS_PANEL_CONFIGURATION_TITLE = t.localize(7502, null);
				}
				static {
					this.PROBLEMS_PANEL_CONFIGURATION_AUTO_REVEAL = t.localize(
						7503,
						null,
					);
				}
				static {
					this.PROBLEMS_PANEL_CONFIGURATION_VIEW_MODE = t.localize(7504, null);
				}
				static {
					this.PROBLEMS_PANEL_CONFIGURATION_SHOW_CURRENT_STATUS = t.localize(
						7505,
						null,
					);
				}
				static {
					this.PROBLEMS_PANEL_CONFIGURATION_COMPARE_ORDER = t.localize(
						7506,
						null,
					);
				}
				static {
					this.PROBLEMS_PANEL_CONFIGURATION_COMPARE_ORDER_SEVERITY = t.localize(
						7507,
						null,
					);
				}
				static {
					this.PROBLEMS_PANEL_CONFIGURATION_COMPARE_ORDER_POSITION = t.localize(
						7508,
						null,
					);
				}
				static {
					this.MARKERS_PANEL_TITLE_PROBLEMS = t.localize2(7547, "Problems");
				}
				static {
					this.MARKERS_PANEL_NO_PROBLEMS_BUILT = t.localize(7509, null);
				}
				static {
					this.MARKERS_PANEL_NO_PROBLEMS_ACTIVE_FILE_BUILT = t.localize(
						7510,
						null,
					);
				}
				static {
					this.MARKERS_PANEL_NO_PROBLEMS_FILTERS = t.localize(7511, null);
				}
				static {
					this.MARKERS_PANEL_ACTION_TOOLTIP_MORE_FILTERS = t.localize(
						7512,
						null,
					);
				}
				static {
					this.MARKERS_PANEL_FILTER_LABEL_SHOW_ERRORS = t.localize(7513, null);
				}
				static {
					this.MARKERS_PANEL_FILTER_LABEL_SHOW_WARNINGS = t.localize(
						7514,
						null,
					);
				}
				static {
					this.MARKERS_PANEL_FILTER_LABEL_SHOW_INFOS = t.localize(7515, null);
				}
				static {
					this.MARKERS_PANEL_FILTER_LABEL_EXCLUDED_FILES = t.localize(
						7516,
						null,
					);
				}
				static {
					this.MARKERS_PANEL_FILTER_LABEL_ACTIVE_FILE = t.localize(7517, null);
				}
				static {
					this.MARKERS_PANEL_ACTION_TOOLTIP_FILTER = t.localize(7518, null);
				}
				static {
					this.MARKERS_PANEL_ACTION_TOOLTIP_QUICKFIX = t.localize(7519, null);
				}
				static {
					this.MARKERS_PANEL_FILTER_ARIA_LABEL = t.localize(7520, null);
				}
				static {
					this.MARKERS_PANEL_FILTER_PLACEHOLDER = t.localize(7521, null);
				}
				static {
					this.MARKERS_PANEL_FILTER_ERRORS = t.localize(7522, null);
				}
				static {
					this.MARKERS_PANEL_FILTER_WARNINGS = t.localize(7523, null);
				}
				static {
					this.MARKERS_PANEL_FILTER_INFOS = t.localize(7524, null);
				}
				static {
					this.MARKERS_PANEL_SINGLE_ERROR_LABEL = t.localize(7525, null);
				}
				static {
					this.MARKERS_PANEL_MULTIPLE_ERRORS_LABEL = (d) =>
						t.localize(7526, null, "" + d);
				}
				static {
					this.MARKERS_PANEL_SINGLE_WARNING_LABEL = t.localize(7527, null);
				}
				static {
					this.MARKERS_PANEL_MULTIPLE_WARNINGS_LABEL = (d) =>
						t.localize(7528, null, "" + d);
				}
				static {
					this.MARKERS_PANEL_SINGLE_INFO_LABEL = t.localize(7529, null);
				}
				static {
					this.MARKERS_PANEL_MULTIPLE_INFOS_LABEL = (d) =>
						t.localize(7530, null, "" + d);
				}
				static {
					this.MARKERS_PANEL_SINGLE_UNKNOWN_LABEL = t.localize(7531, null);
				}
				static {
					this.MARKERS_PANEL_MULTIPLE_UNKNOWNS_LABEL = (d) =>
						t.localize(7532, null, "" + d);
				}
				static {
					this.MARKERS_PANEL_AT_LINE_COL_NUMBER = (d, m) =>
						t.localize(7533, null, "" + d, "" + m);
				}
				static {
					this.MARKERS_TREE_ARIA_LABEL_RESOURCE = (d, m, r) =>
						t.localize(7534, null, d, m, r);
				}
				static {
					this.MARKERS_TREE_ARIA_LABEL_MARKER = (d) => {
						const m = d.relatedInformation.length
							? t.localize(7535, null, d.relatedInformation.length)
							: "";
						switch (d.marker.severity) {
							case w.MarkerSeverity.Error:
								return d.marker.source
									? t.localize(
											7536,
											null,
											d.marker.message,
											d.marker.startLineNumber,
											d.marker.startColumn,
											m,
											d.marker.source,
										)
									: t.localize(
											7537,
											null,
											d.marker.message,
											d.marker.startLineNumber,
											d.marker.startColumn,
											m,
										);
							case w.MarkerSeverity.Warning:
								return d.marker.source
									? t.localize(
											7538,
											null,
											d.marker.message,
											d.marker.startLineNumber,
											d.marker.startColumn,
											m,
											d.marker.source,
										)
									: t.localize(
											7539,
											null,
											d.marker.message,
											d.marker.startLineNumber,
											d.marker.startColumn,
											m,
											m,
										);
							case w.MarkerSeverity.Info:
								return d.marker.source
									? t.localize(
											7540,
											null,
											d.marker.message,
											d.marker.startLineNumber,
											d.marker.startColumn,
											m,
											d.marker.source,
										)
									: t.localize(
											7541,
											null,
											d.marker.message,
											d.marker.startLineNumber,
											d.marker.startColumn,
											m,
										);
							default:
								return d.marker.source
									? t.localize(
											7542,
											null,
											d.marker.source,
											d.marker.message,
											d.marker.startLineNumber,
											d.marker.startColumn,
											m,
											d.marker.source,
										)
									: t.localize(
											7543,
											null,
											d.marker.message,
											d.marker.startLineNumber,
											d.marker.startColumn,
											m,
										);
						}
					};
				}
				static {
					this.MARKERS_TREE_ARIA_LABEL_RELATED_INFORMATION = (d) =>
						t.localize(
							7544,
							null,
							d.message,
							d.startLineNumber,
							d.startColumn,
							(0, i.$kh)(d.resource),
						);
				}
				static {
					this.SHOW_ERRORS_WARNINGS_ACTION_LABEL = t.localize(7545, null);
				}
			}
			e.default = E;
		}),
		