!function (i) {
    "use strict";
    function e() {
        this.$body = i("body")
    }
    e.prototype.init = function () {
        i("#jstree-1").jstree({
            core: {
                themes: {
                    responsive: !1
                }
            },
            types: {
                default: {
                    icon: "ri-folder-line"
                },
                file: {
                    icon: "ri-article-line"
                }
            },
            plugins: ["types"]
        }),
            i("#jstree-1").on("select_node.jstree", function (e, t) {
                t = i("#" + t.selected).find("a");
                if ("#" != t.attr("href") && "javascript:;" != t.attr("href") && "" != t.attr("href"))
                    return "_blank" == t.attr("target") && (t.attr("href").target = "_blank"),
                        document.location.href = t.attr("href"),
                        !1
            }),
            i("#jstree-2").jstree({
                core: {
                    themes: {
                        responsive: !1
                    }
                },
                types: {
                    default: {
                        icon: "ri-folder-line text-warning"
                    },
                    file: {
                        icon: "ri-article-line  text-warning"
                    }
                },
                plugins: ["types"]
            }),
            i("#jstree-2").on("select_node.jstree", function (e, t) {
                t = i("#" + t.selected).find("a");
                if ("#" != t.attr("href") && "javascript:;" != t.attr("href") && "" != t.attr("href"))
                    return "_blank" == t.attr("target") && (t.attr("href").target = "_blank"),
                        document.location.href = t.attr("href"),
                        !1
            }),
            i("#jstree-3").jstree({
                plugins: ["wholerow", "checkbox", "types"],
                core: {
                    themes: {
                        responsive: !1
                    },
                    data: [{
                        text: "Same but with checkboxes",
                        children: [{
                            text: "initially selected",
                            state: {
                                selected: !0
                            }
                        }, {
                            text: "custom icon",
                            icon: "ri-feedback-line text-danger"
                        }, {
                            text: "initially open",
                            icon: "ri-folder-line text-default",
                            state: {
                                opened: !0
                            },
                            children: ["Another node"]
                        }, {
                            text: "custom icon",
                            icon: "ri-article-line text-warning"
                        }, {
                            text: "disabled node",
                            icon: "ri-close-circle-line text-success",
                            state: {
                                disabled: !0
                            }
                        }]
                    }, "And wholerow selection"]
                },
                types: {
                    default: {
                        icon: "ri-folder-line text-warning"
                    },
                    file: {
                        icon: "ri-article-line  text-warning"
                    }
                }
            }),
            i("#jstree-4").jstree({
                core: {
                    themes: {
                        responsive: !1
                    },
                    check_callback: !0,
                    data: [{
                        text: "Parent Node",
                        children: [{
                            text: "Initially selected",
                            state: {
                                selected: !0
                            }
                        }, {
                            text: "Custom Icon",
                            icon: "ri-feedback-line text-danger"
                        }, {
                            text: "Initially open",
                            icon: "ri-folder-line text-success",
                            state: {
                                opened: !0
                            },
                            children: [{
                                text: "Another node",
                                icon: "ri-article-line text-warning"
                            }]
                        }, {
                            text: "Another Custom Icon",
                            icon: "ri-article-line text-warning"
                        }, {
                            text: "Disabled Node",
                            icon: "ri-close-circle-line text-success",
                            state: {
                                disabled: !0
                            }
                        }, {
                            text: "Sub Nodes",
                            icon: "ri-folder-line text-danger",
                            children: [{
                                text: "Item 1",
                                icon: "ri-article-line text-warning"
                            }, {
                                text: "Item 2",
                                icon: "ri-article-line text-success"
                            }, {
                                text: "Item 3",
                                icon: "ri-article-line text-default"
                            }, {
                                text: "Item 4",
                                icon: "ri-article-line text-danger"
                            }, {
                                text: "Item 5",
                                icon: "ri-article-line text-info"
                            }]
                        }]
                    }, "Another Node"]
                },
                types: {
                    default: {
                        icon: "ri-folder-line text-primary"
                    },
                    file: {
                        icon: "ri-article-line  text-primary"
                    }
                },
                state: {
                    key: "demo2"
                },
                plugins: ["contextmenu", "state", "types"]
            }),
            i("#jstree-5").jstree({
                core: {
                    themes: {
                        responsive: !1
                    },
                    check_callback: !0,
                    data: [{
                        text: "Parent Node",
                        children: [{
                            text: "Initially selected",
                            state: {
                                selected: !0
                            }
                        }, {
                            text: "Custom Icon",
                            icon: "ri-article-line text-danger"
                        }, {
                            text: "Initially open",
                            icon: "ri-folder-line text-success",
                            state: {
                                opened: !0
                            },
                            children: [{
                                text: "Another node",
                                icon: "ri-article-line text-warning"
                            }]
                        }, {
                            text: "Another Custom Icon",
                            icon: "ri-line-chart-line text-warning"
                        }, {
                            text: "Disabled Node",
                            icon: "ri-close-circle-line text-success",
                            state: {
                                disabled: !0
                            }
                        }, {
                            text: "Sub Nodes",
                            icon: "ri-folder-line text-danger",
                            children: [{
                                text: "Item 1",
                                icon: "ri-article-line text-warning"
                            }, {
                                text: "Item 2",
                                icon: "ri-article-line text-success"
                            }, {
                                text: "Item 3",
                                icon: "ri-article-line text-default"
                            }, {
                                text: "Item 4",
                                icon: "ri-article-line text-danger"
                            }, {
                                text: "Item 5",
                                icon: "ri-article-line text-info"
                            }]
                        }]
                    }, "Another Node"]
                },
                types: {
                    default: {
                        icon: "ri-folder-line text-success"
                    },
                    file: {
                        icon: "ri-article-line  text-success"
                    }
                },
                state: {
                    key: "demo2"
                },
                plugins: ["dnd", "state", "types"]
            }),
            i("#jstree-6").jstree({
                core: {
                    themes: {
                        responsive: !1
                    },
                    check_callback: !0,
                    data: {
                        url: function (e) {
                            return e.id,
                                "/assets/data/ajax_demo_children.json"
                        },
                        data: function (e) {
                            return {
                                id: e.id
                            }
                        }
                    }
                },
                types: {
                    default: {
                        icon: "ri-folder-line text-primary"
                    },
                    file: {
                        icon: "ri-article-line  text-primary"
                    }
                },
                state: {
                    key: "demo3"
                },
                plugins: ["dnd", "state", "types"]
            })
    }
        ,
        i.JSTree = new e,
        i.JSTree.Constructor = e
}(window.jQuery),
    function () {
        "use strict";
        window.jQuery.JSTree.init()
    }();
