define(de[2180], he([1, 0, 739]), function (ce, e, t) {
		"use strict";
		Object.defineProperty(e, "__esModule", { value: !0 }), (e.$Umb = void 0);
		class i {
			constructor(E, C) {
				(this.a = E), (this.b = C);
			}
			selectionMode() {
				return this.b.selectionMode();
			}
			disallowEmptySelection() {
				return this.b.disallowEmptySelection();
			}
			selectionBehavior() {
				return this.b.selectionBehavior();
			}
			setSelectionBehavior(E) {
				this.b.setSelectionBehavior(E);
			}
			isFocused() {
				return this.b.isFocused();
			}
			setFocused(E) {
				this.b.setFocused(E);
			}
			focusedKey() {
				return this.b.focusedKey();
			}
			setFocusedKey(E) {
				(E == null || this.a().getItem(E)) && this.b.setFocusedKey(E);
			}
			selectedKeys() {
				return this.b.selectedKeys();
			}
			isSelected(E) {
				if (this.b.selectionMode() === "none") return !1;
				const C = this.f(E);
				return C == null ? !1 : this.b.selectedKeys().has(C);
			}
			isEmpty() {
				return this.b.selectedKeys().size === 0;
			}
			isSelectAll() {
				if (this.isEmpty()) return !1;
				const E = this.b.selectedKeys();
				return this.g().every((C) => E.has(C));
			}
			firstSelectedKey() {
				let E;
				for (const C of this.b.selectedKeys()) {
					const d = this.a().getItem(C),
						m = d?.index != null && E?.index != null && d.index < E.index;
					(!E || m) && (E = d);
				}
				return E?.key;
			}
			lastSelectedKey() {
				let E;
				for (const C of this.b.selectedKeys()) {
					const d = this.a().getItem(C),
						m = d?.index != null && E?.index != null && d.index > E.index;
					(!E || m) && (E = d);
				}
				return E?.key;
			}
			extendSelection(E) {
				if (this.selectionMode() === "none") return;
				if (this.selectionMode() === "single") {
					this.replaceSelection(E);
					return;
				}
				const C = this.f(E);
				if (C == null) return;
				const d = this.b.selectedKeys(),
					m = d.anchorKey || C,
					r = new t.$Omb(d, m, C);
				for (const u of this.c(m, d.currentKey || C)) r.delete(u);
				for (const u of this.c(C, m)) this.canSelectItem(u) && r.add(u);
				this.b.setSelectedKeys(r);
			}
			c(E, C) {
				const d = this.a().getItem(E),
					m = this.a().getItem(C);
				return d && m
					? d.index != null && m.index != null && d.index <= m.index
						? this.d(E, C)
						: this.d(C, E)
					: [];
			}
			d(E, C) {
				const d = [];
				let m = E;
				for (; m != null; ) {
					const r = this.a().getItem(m);
					if ((r && r.type === "item" && d.push(m), m === C)) return d;
					m = this.a().getKeyAfter(m);
				}
				return [];
			}
			f(E) {
				const C = this.a().getItem(E);
				return !C || C.type !== "item" ? null : C.key;
			}
			toggleSelection(E) {
				if (this.selectionMode() === "none") return;
				if (this.selectionMode() === "single" && !this.isSelected(E)) {
					this.replaceSelection(E);
					return;
				}
				const C = this.f(E);
				if (C == null) return;
				const d = new t.$Omb(this.b.selectedKeys());
				d.has(C)
					? d.delete(C)
					: this.canSelectItem(C) &&
						(d.add(C), (d.anchorKey = C), (d.currentKey = C)),
					!(this.disallowEmptySelection() && d.size === 0) &&
						this.b.setSelectedKeys(d);
			}
			replaceSelection(E) {
				if (this.selectionMode() === "none") return;
				const C = this.f(E);
				if (C == null) return;
				const d = this.canSelectItem(C) ? new t.$Omb([C], C, C) : new t.$Omb();
				this.b.setSelectedKeys(d);
			}
			setSelectedKeys(E) {
				if (this.selectionMode() === "none") return;
				const C = new t.$Omb();
				for (const d of E) {
					const m = this.f(d);
					if (m != null && (C.add(m), this.selectionMode() === "single")) break;
				}
				this.b.setSelectedKeys(C);
			}
			selectAll() {
				this.selectionMode() === "multiple" &&
					this.b.setSelectedKeys(new Set(this.g()));
			}
			clearSelection() {
				const E = this.b.selectedKeys();
				!this.disallowEmptySelection() &&
					E.size > 0 &&
					this.b.setSelectedKeys(new t.$Omb());
			}
			toggleSelectAll() {
				this.isSelectAll() ? this.clearSelection() : this.selectAll();
			}
			select(E, C) {
				this.selectionMode() !== "none" &&
					(this.selectionMode() === "single"
						? this.isSelected(E) && !this.disallowEmptySelection()
							? this.toggleSelection(E)
							: this.replaceSelection(E)
						: this.selectionBehavior() === "toggle" ||
								(C && C.pointerType === "touch")
							? this.toggleSelection(E)
							: this.replaceSelection(E));
			}
			isSelectionEqual(E) {
				if (E === this.b.selectedKeys()) return !0;
				const C = this.selectedKeys();
				if (E.size !== C.size) return !1;
				for (const d of E) if (!C.has(d)) return !1;
				for (const d of C) if (!E.has(d)) return !1;
				return !0;
			}
			canSelectItem(E) {
				if (this.b.selectionMode() === "none") return !1;
				const C = this.a().getItem(E);
				return C != null && !C.disabled;
			}
			isDisabled(E) {
				const C = this.a().getItem(E);
				return !C || C.disabled;
			}
			g() {
				const E = [];
				return (
					((d) => {
						for (; d != null; ) {
							if (this.canSelectItem(d)) {
								const m = this.a().getItem(d);
								if (!m) continue;
								m.type === "item" && E.push(d);
							}
							d = this.a().getKeyAfter(d);
						}
					})(this.a().getFirstKey()),
					E
				);
			}
		}
		e.$Umb = i;
	}); /*!
	 * Portions of this file are based on code from zag.
	 * MIT Licensed, Copyright (c) 2021 Chakra UI.
	 *
	 * Credits to the zag team:
	 * https://github.com/chakra-ui/zag/blob/c1e6c7689b22bf58741ded7cf224dd9baec2a046/packages/utilities/form-utils/src/form.ts
	 */
	