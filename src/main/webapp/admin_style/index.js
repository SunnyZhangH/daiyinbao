
(function ($) {
    $.learuntab = {
        requestFullScreen: function () {
            var de = document.documentElement;
            if (de.requestFullscreen) {
                de.requestFullscreen();
            } else if (de.mozRequestFullScreen) {
                de.mozRequestFullScreen();
            } else if (de.webkitRequestFullScreen) {
                de.webkitRequestFullScreen();
            }
        },
        exitFullscreen: function () {
            var de = document;
            if (de.exitFullscreen) {
                de.exitFullscreen();
            } else if (de.mozCancelFullScreen) {
                de.mozCancelFullScreen();
            } else if (de.webkitCancelFullScreen) {
                de.webkitCancelFullScreen();
            }
        },
        refreshTab: function () {
            var currentId = $('.page-tabs-content').find('.active').attr('data-id');
            var target = $('.LRADMS_iframe[data-id="' + currentId + '"]');
            var url = target.attr('src');
            //$.loading(true);
            target.attr('src', url).load(function () {
                //$.loading(false);
            });
        },
        activeTab: function () {
            var currentId = $(this).data('id');
            if (!$(this).hasClass('active')) {
                $('.mainContent .LRADMS_iframe').each(function () {
                    if ($(this).data('id') == currentId) {
                        $(this).show().siblings('.LRADMS_iframe').hide();
                        return false;
                    }
                });
                $(this).addClass('active').siblings('.menuTab').removeClass('active');
                $.learuntab.scrollToTab(this);
            }
        },
        closeOtherTabs: function () {
            $('.page-tabs-content').children("[data-id]").find('.fa-remove').parents('a').not(".active").each(function () {
                $('.LRADMS_iframe[data-id="' + $(this).data('id') + '"]').remove();
                $(this).remove();
            });
            $('.page-tabs-content').css("margin-left", "0");
        },
        closeTab: function () {
            var closeTabId = $(this).parents('.menuTab').data('id');
            var currentWidth = $(this).parents('.menuTab').width();
            if ($(this).parents('.menuTab').hasClass('active')) {
                if ($(this).parents('.menuTab').next('.menuTab').size()) {
                    var activeId = $(this).parents('.menuTab').next('.menuTab:eq(0)').data('id');
                    $(this).parents('.menuTab').next('.menuTab:eq(0)').addClass('active');

                    $('.mainContent .LRADMS_iframe').each(function () {
                        if ($(this).data('id') == activeId) {
                            $(this).show().siblings('.LRADMS_iframe').hide();
                            return false;
                        }
                    });
                    var marginLeftVal = parseInt($('.page-tabs-content').css('margin-left'));
                    if (marginLeftVal < 0) {
                        $('.page-tabs-content').animate({
                            marginLeft: (marginLeftVal + currentWidth) + 'px'
                        }, "fast");
                    }
                    $(this).parents('.menuTab').remove();
                    $('.mainContent .LRADMS_iframe').each(function () {
                        if ($(this).data('id') == closeTabId) {
                            $(this).remove();
                            return false;
                        }
                    });
                }
                if ($(this).parents('.menuTab').prev('.menuTab').size()) {
                    var activeId = $(this).parents('.menuTab').prev('.menuTab:last').data('id');
                    $(this).parents('.menuTab').prev('.menuTab:last').addClass('active');
                    $('.mainContent .LRADMS_iframe').each(function () {
                        if ($(this).data('id') == activeId) {
                            $(this).show().siblings('.LRADMS_iframe').hide();
                            return false;
                        }
                    });
                    $(this).parents('.menuTab').remove();
                    $('.mainContent .LRADMS_iframe').each(function () {
                        if ($(this).data('id') == closeTabId) {
                            $(this).remove();
                            return false;
                        }
                    });
                }
            }
            else {
                $(this).parents('.menuTab').remove();
                $('.mainContent .LRADMS_iframe').each(function () {
                    if ($(this).data('id') == closeTabId) {
                        $(this).remove();
                        return false;
                    }
                });
                $.learuntab.scrollToTab($('.menuTab.active'));
            }
            return false;
        },
        addTab: function () {
            $(".navbar-custom-menu>ul>li.open").removeClass("open");
            var dataId = $(this).attr('data-id');
            if (dataId != "") {
                //top.$.cookie('nfine_currentmoduleid', dataId, { path: "/" });
            }
            var dataUrl = $(this).attr('href');

            var menuName = $.trim($(this).text());
            var flag = true;
            if (dataUrl == undefined || $.trim(dataUrl).length == 0) {
                return false;
            }
            $('.menuTab').each(function () {
                if ($(this).data('id') == dataUrl) {
                    if (!$(this).hasClass('active')) {
                        $(this).addClass('active').siblings('.menuTab').removeClass('active');
                        $.learuntab.scrollToTab(this);
                        $('.mainContent .LRADMS_iframe').each(function () {
                            if ($(this).data('id') == dataUrl) {
                                $(this).show().siblings('.LRADMS_iframe').hide();
                                return false;
                            }
                        });
                    }
                    flag = false;
                    return false;
                }
            });
            if (flag) {
                var str = '<a href="javascript:;" class="active menuTab" data-id="' + dataUrl + '">' + menuName + ' <i class="fa fa-remove"></i></a>';
                $('.menuTab').removeClass('active');
                var str1 = '<iframe class="LRADMS_iframe" id="iframe' + dataId + '" name="iframe' + dataId + '"  width="100%" height="100%" src="' + dataUrl + '" frameborder="0" data-id="' + dataUrl + '" seamless></iframe>';
                $('.mainContent').find('iframe.LRADMS_iframe').hide();
                $('.mainContent').append(str1);
                //$.loading(true);
                $('.mainContent iframe:visible').load(function () {
                    //$.loading(false);
                });
                $('.menuTabs .page-tabs-content').append(str);
                $.learuntab.scrollToTab($('.menuTab.active'));
            }
            return false;
        },
        myAddTab: function (Name,Href,data_id) {

            $(".navbar-custom-menu>ul>li.open").removeClass("open");
            var dataId = data_id;
            var dataUrl = Href;
            var menuName = Name;
            var flag = true;
            if (dataUrl == undefined || $.trim(dataUrl).length == 0) {
                return false;
            }
            $('.menuTab').each(function () {
                if ($(this).data('id') == dataUrl) {
                    if (!$(this).hasClass('active')) {
                        $(this).addClass('active').siblings('.menuTab').removeClass('active');
                        $.learuntab.scrollToTab(this);
                        $('.mainContent .LRADMS_iframe').each(function () {
                            if ($(this).data('id') == dataUrl) {
                                $(this).show().siblings('.LRADMS_iframe').hide();
                                return false;
                            }
                        });
                    }
                    flag = false;
                    return false;
                }
            });
            if (flag) {

                var str = '<a href="javascript:;" class="active menuTab" data-id="' + dataUrl + '">' + menuName + ' <i class="fa fa-remove"></i></a>';
                $('.menuTab').removeClass('active');

                var str1 = '<iframe class="LRADMS_iframe" id="iframe' + dataId + '" name="iframe' + dataId + '"  width="100%" height="100%" src="' + dataUrl + '" frameborder="0" data-id="' + dataUrl + '" seamless></iframe>';
                $('.mainContent').find('iframe.LRADMS_iframe').hide();
                $('.mainContent').append(str1);
                //$.loading(true);
                $('.mainContent iframe:visible').load(function () {
                    //$.loading(false);
                });
                //if(count>1){
                //    $('.menuTabs .page-tabs-content').pop().append(str);
                //    $.learuntab.scrollToTab($('.menuTab.active'));
                //}
                //else {
                $('.menuTabs .page-tabs-content').append(str);
                $.learuntab.scrollToTab($('.menuTab.active'));
            //}

            }
            return false;
        },
        scrollTabRight: function () {
            var marginLeftVal = Math.abs(parseInt($('.page-tabs-content').css('margin-left')));
            var tabOuterWidth = $.learuntab.calSumWidth($(".content-tabs").children().not(".menuTabs"));
            var visibleWidth = $(".content-tabs").outerWidth(true) - tabOuterWidth;
            var scrollVal = 0;
            if ($(".page-tabs-content").width() < visibleWidth) {
                return false;
            } else {
                var tabElement = $(".menuTab:first");
                var offsetVal = 0;
                while ((offsetVal + $(tabElement).outerWidth(true)) <= marginLeftVal) {
                    offsetVal += $(tabElement).outerWidth(true);
                    tabElement = $(tabElement).next();
                }
                offsetVal = 0;
                while ((offsetVal + $(tabElement).outerWidth(true)) < (visibleWidth) && tabElement.length > 0) {
                    offsetVal += $(tabElement).outerWidth(true);
                    tabElement = $(tabElement).next();
                }
                scrollVal = $.learuntab.calSumWidth($(tabElement).prevAll());
                if (scrollVal > 0) {
                    $('.page-tabs-content').animate({
                        marginLeft: 0 - scrollVal + 'px'
                    }, "fast");
                }
            }
        },
        scrollTabLeft: function () {
            var marginLeftVal = Math.abs(parseInt($('.page-tabs-content').css('margin-left')));
            var tabOuterWidth = $.learuntab.calSumWidth($(".content-tabs").children().not(".menuTabs"));
            var visibleWidth = $(".content-tabs").outerWidth(true) - tabOuterWidth;
            var scrollVal = 0;
            if ($(".page-tabs-content").width() < visibleWidth) {
                return false;
            } else {
                var tabElement = $(".menuTab:first");
                var offsetVal = 0;
                while ((offsetVal + $(tabElement).outerWidth(true)) <= marginLeftVal) {
                    offsetVal += $(tabElement).outerWidth(true);
                    tabElement = $(tabElement).next();
                }
                offsetVal = 0;
                if ($.learuntab.calSumWidth($(tabElement).prevAll()) > visibleWidth) {
                    while ((offsetVal + $(tabElement).outerWidth(true)) < (visibleWidth) && tabElement.length > 0) {
                        offsetVal += $(tabElement).outerWidth(true);
                        tabElement = $(tabElement).prev();
                    }
                    scrollVal = $.learuntab.calSumWidth($(tabElement).prevAll());
                }
            }
            $('.page-tabs-content').animate({
                marginLeft: 0 - scrollVal + 'px'
            }, "fast");
        },
        scrollToTab: function (element) {
            var marginLeftVal = $.learuntab.calSumWidth($(element).prevAll()), marginRightVal = $.learuntab.calSumWidth($(element).nextAll());
            var tabOuterWidth = $.learuntab.calSumWidth($(".content-tabs").children().not(".menuTabs"));
            var visibleWidth = $(".content-tabs").outerWidth(true) - tabOuterWidth;
            var scrollVal = 0;
            if ($(".page-tabs-content").outerWidth() < visibleWidth) {
                scrollVal = 0;
            } else if (marginRightVal <= (visibleWidth - $(element).outerWidth(true) - $(element).next().outerWidth(true))) {
                if ((visibleWidth - $(element).next().outerWidth(true)) > marginRightVal) {
                    scrollVal = marginLeftVal;
                    var tabElement = element;
                    while ((scrollVal - $(tabElement).outerWidth()) > ($(".page-tabs-content").outerWidth() - visibleWidth)) {
                        scrollVal -= $(tabElement).prev().outerWidth();
                        tabElement = $(tabElement).prev();
                    }
                }
            } else if (marginLeftVal > (visibleWidth - $(element).outerWidth(true) - $(element).prev().outerWidth(true))) {
                scrollVal = marginLeftVal - $(element).prev().outerWidth(true);
            }
            $('.page-tabs-content').animate({
                marginLeft: 0 - scrollVal + 'px'
            }, "fast");
        },
        calSumWidth: function (element) {
            var width = 0;
            $(element).each(function () {
                width += $(this).outerWidth(true);
            });
            return width;
        },
        init: function () {
            $('.menuItem').on('click', $.learuntab.addTab);
            $('.menuTabs').on('click', '.menuTab i', $.learuntab.closeTab);
            $('.menuTabs').on('click', '.menuTab', $.learuntab.activeTab);
            $('.tabLeft').on('click', $.learuntab.scrollTabLeft);
            $('.tabRight').on('click', $.learuntab.scrollTabRight);
            $('.tabReload').on('click', $.learuntab.refreshTab);
            $('.tabCloseCurrent').on('click', function () {
                $('.page-tabs-content').find('.active i').trigger("click");
            });
            $('.tabCloseAll').on('click', function () {
                $('.page-tabs-content').children("[data-id]").find('.fa-remove').each(function () {
                    $('.LRADMS_iframe[data-id="' + $(this).data('id') + '"]').remove();
                    $(this).parents('a').remove();
                });
                $('.page-tabs-content').children("[data-id]:first").each(function () {
                    $('.LRADMS_iframe[data-id="' + $(this).data('id') + '"]').show();
                    $(this).addClass("active");
                });
                $('.page-tabs-content').css("margin-left", "0");
            });
            $('.tabCloseOther').on('click', $.learuntab.closeOtherTabs);
            $('.fullscreen').on('click', function () {
                if (!$(this).attr('fullscreen')) {
                    $(this).attr('fullscreen', 'true');
                    $.learuntab.requestFullScreen();
                } else {
                    $(this).removeAttr('fullscreen')
                    $.learuntab.exitFullscreen();
                }
            });
        }
    };
    $.learunindex = {
        load: function () {
            $("body").removeClass("hold-transition")
            $("#content-wrapper").find('.mainContent').height($(window).height() - 130);
            $(window).resize(function (e) {
                $("#content-wrapper").find('.mainContent').height($(window).height() - 130);
            });
            $(".sidebar-toggle").click(function () {
                if (!$("body").hasClass("sidebar-collapse")) {
                    $("body").addClass("sidebar-collapse");
                } else {
                    $("body").removeClass("sidebar-collapse");
                }
            });
            $(window).load(function () {
                window.setTimeout(function () {
                    $('#ajax-loader').fadeOut();
                }, 300);
            });
        },
        jsonWhere: function (data, action) {
            if (action == null) return;
            var reval = new Array();
            $(data).each(function (i, v) {
                if (action(v)) {
                    reval.push(v);
                }
            });
            return reval;
        },

        loadMenu: function (id) {
            var data;
            if(id==0){
                data=[
                    { "F_ModuleId": "2", "F_ParentId": "0", "F_EnCode": "SysManage", "F_FullName": "基础信息分析", "F_Icon": "fa fa-desktop", "F_UrlAddress": "/default", "F_Target": "expand", "F_IsMenu": 0, "F_AllowExpand": 1, "F_IsPublic": 0, "F_AllowEdit": null, "F_AllowDelete": null, "F_SortCode": 1, "F_DeleteMark": 0, "F_EnabledMark": 1, "F_Description": null, "F_CreateDate": null, "F_CreateUserId": null, "F_CreateUserName": null, "F_ModifyDate": "2015-11-17 11:22:46", "F_ModifyUserId": "System", "F_ModifyUserName": "超级管理员" },
                    { "F_ModuleId": "21", "F_ParentId": "2", "F_EnCode": "OrganizeManage", "F_FullName": "从业单位分析", "F_Icon": "fa fa-sitemap", "F_UrlAddress": "unit_analysis.html", "F_Target": "iframe", "F_IsMenu": 1, "F_AllowExpand": 1, "F_IsPublic": 0, "F_AllowEdit": null, "F_AllowDelete": null, "F_SortCode": 1, "F_DeleteMark": 0, "F_EnabledMark": 1, "F_Description": null, "F_CreateDate": null, "F_CreateUserId": null, "F_CreateUserName": null, "F_ModifyDate": "2016-04-29 11:55:28", "F_ModifyUserId": "System", "F_ModifyUserName": "超级管理员" },
                    { "F_ModuleId": "22", "F_ParentId": "2", "F_EnCode": "OrganizeManage", "F_FullName": "从业人员分析", "F_Icon": "fa fa-sitemap", "F_UrlAddress": "personAnalysis.html", "F_Target": "iframe", "F_IsMenu": 1, "F_AllowExpand": 1, "F_IsPublic": 0, "F_AllowEdit": null, "F_AllowDelete": null, "F_SortCode": 1, "F_DeleteMark": 0, "F_EnabledMark": 1, "F_Description": null, "F_CreateDate": null, "F_CreateUserId": null, "F_CreateUserName": null, "F_ModifyDate": "2016-04-29 11:55:28", "F_ModifyUserId": "System", "F_ModifyUserName": "超级管理员" },
                    { "F_ModuleId": "23", "F_ParentId": "2", "F_EnCode": "OrganizeManage", "F_FullName": "危险品分析", "F_Icon": "fa fa-sitemap", "F_UrlAddress": "goodsAnalysis.html", "F_Target": "iframe", "F_IsMenu": 1, "F_AllowExpand": 1, "F_IsPublic": 0, "F_AllowEdit": null, "F_AllowDelete": null, "F_SortCode": 1, "F_DeleteMark": 0, "F_EnabledMark": 1, "F_Description": null, "F_CreateDate": null, "F_CreateUserId": null, "F_CreateUserName": null, "F_ModifyDate": "2016-04-29 11:55:28", "F_ModifyUserId": "System", "F_ModifyUserName": "超级管理员" },
                    { "F_ModuleId": "24", "F_ParentId": "2", "F_EnCode": "OrganizeManage", "F_FullName": "运输车分析", "F_Icon": "fa fa-sitemap", "F_UrlAddress": "transport_analysis.html", "F_Target": "iframe", "F_IsMenu": 1, "F_AllowExpand": 1, "F_IsPublic": 0, "F_AllowEdit": null, "F_AllowDelete": null, "F_SortCode": 1, "F_DeleteMark": 0, "F_EnabledMark": 1, "F_Description": null, "F_CreateDate": null, "F_CreateUserId": null, "F_CreateUserName": null, "F_ModifyDate": "2016-04-29 11:55:28", "F_ModifyUserId": "System", "F_ModifyUserName": "超级管理员" },
                    { "F_ModuleId": "25", "F_ParentId": "2", "F_EnCode": "OrganizeManage", "F_FullName": "仓库分析", "F_Icon": "fa fa-sitemap", "F_UrlAddress": "houseAnalysis.html", "F_Target": "iframe", "F_IsMenu": 1, "F_AllowExpand": 1, "F_IsPublic": 0, "F_AllowEdit": null, "F_AllowDelete": null, "F_SortCode": 1, "F_DeleteMark": 0, "F_EnabledMark": 1, "F_Description": null, "F_CreateDate": null, "F_CreateUserId": null, "F_CreateUserName": null, "F_ModifyDate": "2016-04-29 11:55:28", "F_ModifyUserId": "System", "F_ModifyUserName": "超级管理员" },
                    { "F_ModuleId": "26", "F_ParentId": "2", "F_EnCode": "OrganizeManage", "F_FullName": "事故分析", "F_Icon": "fa fa-sitemap", "F_UrlAddress": "accidentAnalysis.html", "F_Target": "iframe", "F_IsMenu": 1, "F_AllowExpand": 1, "F_IsPublic": 0, "F_AllowEdit": null, "F_AllowDelete": null, "F_SortCode": 1, "F_DeleteMark": 0, "F_EnabledMark": 1, "F_Description": null, "F_CreateDate": null, "F_CreateUserId": null, "F_CreateUserName": null, "F_ModifyDate": "2016-04-29 11:55:28", "F_ModifyUserId": "System", "F_ModifyUserName": "超级管理员" },

                    { "F_ModuleId": "4", "F_ParentId": "0", "F_EnCode": "SysManage", "F_FullName": "危险品环节分析", "F_Icon": "fa fa-desktop", "F_UrlAddress": "/default", "F_Target": "expand", "F_IsMenu": 0, "F_AllowExpand": 1, "F_IsPublic": 0, "F_AllowEdit": null, "F_AllowDelete": null, "F_SortCode": 1, "F_DeleteMark": 0, "F_EnabledMark": 1, "F_Description": null, "F_CreateDate": null, "F_CreateUserId": null, "F_CreateUserName": null, "F_ModifyDate": "2015-11-17 11:22:46", "F_ModifyUserId": "System", "F_ModifyUserName": "超级管理员" },
                    { "F_ModuleId": "42", "F_ParentId": "4", "F_EnCode": "OrganizeManage", "F_FullName": "危险品生产分析", "F_Icon": "fa fa-sitemap", "F_UrlAddress": "production_Analiysis.html", "F_Target": "iframe", "F_IsMenu": 1, "F_AllowExpand": 1, "F_IsPublic": 0, "F_AllowEdit": null, "F_AllowDelete": null, "F_SortCode": 1, "F_DeleteMark": 0, "F_EnabledMark": 1, "F_Description": null, "F_CreateDate": null, "F_CreateUserId": null, "F_CreateUserName": null, "F_ModifyDate": "2016-04-29 11:55:28", "F_ModifyUserId": "System", "F_ModifyUserName": "超级管理员" },
                    { "F_ModuleId": "43", "F_ParentId": "4", "F_EnCode": "OrganizeManage", "F_FullName": "危险品运输分析", "F_Icon": "fa fa-sitemap", "F_UrlAddress": "car_analysis.html", "F_Target": "iframe", "F_IsMenu": 1, "F_AllowExpand": 1, "F_IsPublic": 0, "F_AllowEdit": null, "F_AllowDelete": null, "F_SortCode": 1, "F_DeleteMark": 0, "F_EnabledMark": 1, "F_Description": null, "F_CreateDate": null, "F_CreateUserId": null, "F_CreateUserName": null, "F_ModifyDate": "2016-04-29 11:55:28", "F_ModifyUserId": "System", "F_ModifyUserName": "超级管理员" },
                    { "F_ModuleId": "44", "F_ParentId": "4", "F_EnCode": "OrganizeManage", "F_FullName": "危险品储存分析", "F_Icon": "fa fa-sitemap", "F_UrlAddress": "save_analysis.html", "F_Target": "iframe", "F_IsMenu": 1, "F_AllowExpand": 1, "F_IsPublic": 0, "F_AllowEdit": null, "F_AllowDelete": null, "F_SortCode": 1, "F_DeleteMark": 0, "F_EnabledMark": 1, "F_Description": null, "F_CreateDate": null, "F_CreateUserId": null, "F_CreateUserName": null, "F_ModifyDate": "2016-04-29 11:55:28", "F_ModifyUserId": "System", "F_ModifyUserName": "超级管理员" },
                    { "F_ModuleId": "45", "F_ParentId": "4", "F_EnCode": "OrganizeManage", "F_FullName": "危险品使用分析", "F_Icon": "fa fa-sitemap", "F_UrlAddress": "use_analysis.html", "F_Target": "iframe", "F_IsMenu": 1, "F_AllowExpand": 1, "F_IsPublic": 0, "F_AllowEdit": null, "F_AllowDelete": null, "F_SortCode": 1, "F_DeleteMark": 0, "F_EnabledMark": 1, "F_Description": null, "F_CreateDate": null, "F_CreateUserId": null, "F_CreateUserName": null, "F_ModifyDate": "2016-04-29 11:55:28", "F_ModifyUserId": "System", "F_ModifyUserName": "超级管理员" },
                    { "F_ModuleId": "46", "F_ParentId": "4", "F_EnCode": "OrganizeManage", "F_FullName": "危险品事故分析", "F_Icon": "fa fa-sitemap", "F_UrlAddress": "accidentAnalysis.html", "F_Target": "iframe", "F_IsMenu": 1, "F_AllowExpand": 1, "F_IsPublic": 0, "F_AllowEdit": null, "F_AllowDelete": null, "F_SortCode": 1, "F_DeleteMark": 0, "F_EnabledMark": 1, "F_Description": null, "F_CreateDate": null, "F_CreateUserId": null, "F_CreateUserName": null, "F_ModifyDate": "2016-04-29 11:55:28", "F_ModifyUserId": "System", "F_ModifyUserName": "超级管理员" },
                    { "F_ModuleId": "47", "F_ParentId": "4", "F_EnCode": "OrganizeManage", "F_FullName": "危险品周边分析", "F_Icon": "fa fa-sitemap", "F_UrlAddress": "rim_analysis.html", "F_Target": "iframe", "F_IsMenu": 1, "F_AllowExpand": 1, "F_IsPublic": 0, "F_AllowEdit": null, "F_AllowDelete": null, "F_SortCode": 1, "F_DeleteMark": 0, "F_EnabledMark": 1, "F_Description": null, "F_CreateDate": null, "F_CreateUserId": null, "F_CreateUserName": null, "F_ModifyDate": "2016-04-29 11:55:28", "F_ModifyUserId": "System", "F_ModifyUserName": "超级管理员" },


                    { "F_ModuleId": "1", "F_ParentId": "0", "F_EnCode": "SysManage", "F_FullName": "预警管理", "F_Icon": "fa fa-desktop", "F_UrlAddress": "/default", "F_Target": "expand", "F_IsMenu": 0, "F_AllowExpand": 1, "F_IsPublic": 0, "F_AllowEdit": null, "F_AllowDelete": null, "F_SortCode": 1, "F_DeleteMark": 0, "F_EnabledMark": 1, "F_Description": null, "F_CreateDate": null, "F_CreateUserId": null, "F_CreateUserName": null, "F_ModifyDate": "2015-11-17 11:22:46", "F_ModifyUserId": "System", "F_ModifyUserName": "超级管理员" },
                    { "F_ModuleId": "12", "F_ParentId": "1", "F_EnCode": "OrganizeManage", "F_FullName": "事故管理", "F_Icon": "fa fa-desktop", "F_UrlAddress": "storyList.html", "F_Target": "iframe", "F_IsMenu": 0, "F_AllowExpand": 1, "F_IsPublic": 0, "F_AllowEdit": null, "F_AllowDelete": null, "F_SortCode": 1, "F_DeleteMark": 0, "F_EnabledMark": 1, "F_Description": null, "F_CreateDate": null, "F_CreateUserId": null, "F_CreateUserName": null, "F_ModifyDate": "2015-11-17 11:22:46", "F_ModifyUserId": "System", "F_ModifyUserName": "超级管理员" },
                    { "F_ModuleId": "13", "F_ParentId": "1", "F_EnCode": "OrganizeManage", "F_FullName": "通知管理", "F_Icon": "fa fa-desktop", "F_UrlAddress": "notice.html", "F_Target": "iframe", "F_IsMenu": 0, "F_AllowExpand": 1, "F_IsPublic": 0, "F_AllowEdit": null, "F_AllowDelete": null, "F_SortCode": 1, "F_DeleteMark": 0, "F_EnabledMark": 1, "F_Description": null, "F_CreateDate": null, "F_CreateUserId": null, "F_CreateUserName": null, "F_ModifyDate": "2015-11-17 11:22:46", "F_ModifyUserId": "System", "F_ModifyUserName": "超级管理员" },

                    { "F_ModuleId": "6", "F_ParentId": "0", "F_EnCode": "SysManage", "F_FullName": "消息推送管理", "F_Icon": "fa fa-desktop", "F_UrlAddress": "/default", "F_Target": "expand", "F_IsMenu": 0, "F_AllowExpand": 1, "F_IsPublic": 0, "F_AllowEdit": null, "F_AllowDelete": null, "F_SortCode": 1, "F_DeleteMark": 0, "F_EnabledMark": 1, "F_Description": null, "F_CreateDate": null, "F_CreateUserId": null, "F_CreateUserName": null, "F_ModifyDate": "2015-11-17 11:22:46", "F_ModifyUserId": "System", "F_ModifyUserName": "超级管理员" },
                    { "F_ModuleId": "61", "F_ParentId": "6", "F_EnCode": "OrganizeManage", "F_FullName": "推送人列表管理", "F_Icon": "fa fa-sitemap", "F_UrlAddress": "pushMan.html", "F_Target": "iframe", "F_IsMenu": 1, "F_AllowExpand": 1, "F_IsPublic": 0, "F_AllowEdit": null, "F_AllowDelete": null, "F_SortCode": 1, "F_DeleteMark": 0, "F_EnabledMark": 1, "F_Description": null, "F_CreateDate": null, "F_CreateUserId": null, "F_CreateUserName": null, "F_ModifyDate": "2016-04-29 11:55:28", "F_ModifyUserId": "System", "F_ModifyUserName": "超级管理员" },
                    { "F_ModuleId": "62", "F_ParentId": "6", "F_EnCode": "OrganizeManage", "F_FullName": "消息管理", "F_Icon": "fa fa-sitemap", "F_UrlAddress": "news01.html", "F_Target": "iframe", "F_IsMenu": 1, "F_AllowExpand": 1, "F_IsPublic": 0, "F_AllowEdit": null, "F_AllowDelete": null, "F_SortCode": 1, "F_DeleteMark": 0, "F_EnabledMark": 1, "F_Description": null, "F_CreateDate": null, "F_CreateUserId": null, "F_CreateUserName": null, "F_ModifyDate": "2016-04-29 11:55:28", "F_ModifyUserId": "System", "F_ModifyUserName": "超级管理员" },



                    //{ "F_ModuleId": "99", "F_ParentId": "9", "F_EnCode": "OrganizeManage", "F_FullName": "配置管理", "F_Icon": "fa fa-sitemap", "F_UrlAddress": "peizi.html", "F_Target": "iframe", "F_IsMenu": 1, "F_AllowExpand": 1, "F_IsPublic": 0, "F_AllowEdit": null, "F_AllowDelete": null, "F_SortCode": 1, "F_DeleteMark": 0, "F_EnabledMark": 1, "F_Description": null, "F_CreateDate": null, "F_CreateUserId": null, "F_CreateUserName": null, "F_ModifyDate": "2016-04-29 11:55:28", "F_ModifyUserId": "System", "F_ModifyUserName": "超级管理员" },
                    //{ "F_ModuleId": "100", "F_ParentId": "9", "F_EnCode": "OrganizeManage", "F_FullName": "视频界面", "F_Icon": "fa fa-sitemap", "F_UrlAddress": "video.html", "F_Target": "iframe", "F_IsMenu": 1, "F_AllowExpand": 1, "F_IsPublic": 0, "F_AllowEdit": null, "F_AllowDelete": null, "F_SortCode": 1, "F_DeleteMark": 0, "F_EnabledMark": 1, "F_Description": null, "F_CreateDate": null, "F_CreateUserId": null, "F_CreateUserName": null, "F_ModifyDate": "2016-04-29 11:55:28", "F_ModifyUserId": "System", "F_ModifyUserName": "超级管理员" },
                    //
                    //

                ];
            }else if(id==1){
                data=[
                    { "F_ModuleId": "3", "F_ParentId": "0", "F_EnCode": "SysManage", "F_FullName": "基础信息管理", "F_Icon": "fa fa-desktop", "F_UrlAddress": "/default", "F_Target": "expand", "F_IsMenu": 0, "F_AllowExpand": 1, "F_IsPublic": 0, "F_AllowEdit": null, "F_AllowDelete": null, "F_SortCode": 1, "F_DeleteMark": 0, "F_EnabledMark": 1, "F_Description": null, "F_CreateDate": null, "F_CreateUserId": null, "F_CreateUserName": null, "F_ModifyDate": "2015-11-17 11:22:46", "F_ModifyUserId": "System", "F_ModifyUserName": "超级管理员" },
                    { "F_ModuleId": "31", "F_ParentId": "3", "F_EnCode": "OrganizeManage", "F_FullName": "从业单位查询", "F_Icon": "fa fa-sitemap", "F_UrlAddress": "unit.html", "F_Target": "iframe", "F_IsMenu": 1, "F_AllowExpand": 1, "F_IsPublic": 0, "F_AllowEdit": null, "F_AllowDelete": null, "F_SortCode": 1, "F_DeleteMark": 0, "F_EnabledMark": 1, "F_Description": null, "F_CreateDate": null, "F_CreateUserId": null, "F_CreateUserName": null, "F_ModifyDate": "2016-04-29 11:55:28", "F_ModifyUserId": "System", "F_ModifyUserName": "超级管理员" },
                    { "F_ModuleId": "32", "F_ParentId": "3", "F_EnCode": "OrganizeManage", "F_FullName": "重点监控单位", "F_Icon": "fa fa-sitemap", "F_UrlAddress": "unit01.html", "F_Target": "iframe", "F_IsMenu": 1, "F_AllowExpand": 1, "F_IsPublic": 0, "F_AllowEdit": null, "F_AllowDelete": null, "F_SortCode": 1, "F_DeleteMark": 0, "F_EnabledMark": 1, "F_Description": null, "F_CreateDate": null, "F_CreateUserId": null, "F_CreateUserName": null, "F_ModifyDate": "2016-04-29 11:55:28", "F_ModifyUserId": "System", "F_ModifyUserName": "超级管理员" },
                    { "F_ModuleId": "33", "F_ParentId": "3", "F_EnCode": "OrganizeManage", "F_FullName": "从业人员查询", "F_Icon": "fa fa-sitemap", "F_UrlAddress": "person.html", "F_Target": "iframe", "F_IsMenu": 1, "F_AllowExpand": 1, "F_IsPublic": 0, "F_AllowEdit": null, "F_AllowDelete": null, "F_SortCode": 1, "F_DeleteMark": 0, "F_EnabledMark": 1, "F_Description": null, "F_CreateDate": null, "F_CreateUserId": null, "F_CreateUserName": null, "F_ModifyDate": "2016-04-29 11:55:28", "F_ModifyUserId": "System", "F_ModifyUserName": "超级管理员" },
                    { "F_ModuleId": "34", "F_ParentId": "3", "F_EnCode": "OrganizeManage", "F_FullName": "重点监控人员", "F_Icon": "fa fa-sitemap", "F_UrlAddress": "person01.html", "F_Target": "iframe", "F_IsMenu": 1, "F_AllowExpand": 1, "F_IsPublic": 0, "F_AllowEdit": null, "F_AllowDelete": null, "F_SortCode": 1, "F_DeleteMark": 0, "F_EnabledMark": 1, "F_Description": null, "F_CreateDate": null, "F_CreateUserId": null, "F_CreateUserName": null, "F_ModifyDate": "2016-04-29 11:55:28", "F_ModifyUserId": "System", "F_ModifyUserName": "超级管理员" },
                    { "F_ModuleId": "35", "F_ParentId": "3", "F_EnCode": "OrganizeManage", "F_FullName": "危险品查询", "F_Icon": "fa fa-sitemap", "F_UrlAddress": "goods.html", "F_Target": "iframe", "F_IsMenu": 1, "F_AllowExpand": 1, "F_IsPublic": 0, "F_AllowEdit": null, "F_AllowDelete": null, "F_SortCode": 1, "F_DeleteMark": 0, "F_EnabledMark": 1, "F_Description": null, "F_CreateDate": null, "F_CreateUserId": null, "F_CreateUserName": null, "F_ModifyDate": "2016-04-29 11:55:28", "F_ModifyUserId": "System", "F_ModifyUserName": "超级管理员" },
                    { "F_ModuleId": "36", "F_ParentId": "3", "F_EnCode": "OrganizeManage", "F_FullName": "运输车查询", "F_Icon": "fa fa-sitemap", "F_UrlAddress": "carMes.html", "F_Target": "iframe", "F_IsMenu": 1, "F_AllowExpand": 1, "F_IsPublic": 0, "F_AllowEdit": null, "F_AllowDelete": null, "F_SortCode": 1, "F_DeleteMark": 0, "F_EnabledMark": 1, "F_Description": null, "F_CreateDate": null, "F_CreateUserId": null, "F_CreateUserName": null, "F_ModifyDate": "2016-04-29 11:55:28", "F_ModifyUserId": "System", "F_ModifyUserName": "超级管理员" },
                    { "F_ModuleId": "37", "F_ParentId": "3", "F_EnCode": "OrganizeManage", "F_FullName": "仓库查询", "F_Icon": "fa fa-sitemap", "F_UrlAddress": "warehouse.html", "F_Target": "iframe", "F_IsMenu": 1, "F_AllowExpand": 1, "F_IsPublic": 0, "F_AllowEdit": null, "F_AllowDelete": null, "F_SortCode": 1, "F_DeleteMark": 0, "F_EnabledMark": 1, "F_Description": null, "F_CreateDate": null, "F_CreateUserId": null, "F_CreateUserName": null, "F_ModifyDate": "2016-04-29 11:55:28", "F_ModifyUserId": "System", "F_ModifyUserName": "超级管理员" },
                    { "F_ModuleId": "38", "F_ParentId": "3", "F_EnCode": "OrganizeManage", "F_FullName": "事故查询", "F_Icon": "fa fa-sitemap", "F_UrlAddress": "storyList.html", "F_Target": "iframe", "F_IsMenu": 1, "F_AllowExpand": 1, "F_IsPublic": 0, "F_AllowEdit": null, "F_AllowDelete": null, "F_SortCode": 1, "F_DeleteMark": 0, "F_EnabledMark": 1, "F_Description": null, "F_CreateDate": null, "F_CreateUserId": null, "F_CreateUserName": null, "F_ModifyDate": "2016-04-29 11:55:28", "F_ModifyUserId": "System", "F_ModifyUserName": "超级管理员" },

                    { "F_ModuleId": "2", "F_ParentId": "0", "F_EnCode": "SysManage", "F_FullName": "基础信息分析", "F_Icon": "fa fa-desktop", "F_UrlAddress": "/default", "F_Target": "expand", "F_IsMenu": 0, "F_AllowExpand": 1, "F_IsPublic": 0, "F_AllowEdit": null, "F_AllowDelete": null, "F_SortCode": 1, "F_DeleteMark": 0, "F_EnabledMark": 1, "F_Description": null, "F_CreateDate": null, "F_CreateUserId": null, "F_CreateUserName": null, "F_ModifyDate": "2015-11-17 11:22:46", "F_ModifyUserId": "System", "F_ModifyUserName": "超级管理员" },
                    { "F_ModuleId": "21", "F_ParentId": "2", "F_EnCode": "OrganizeManage", "F_FullName": "从业单位分析", "F_Icon": "fa fa-sitemap", "F_UrlAddress": "unit_analysis.html", "F_Target": "iframe", "F_IsMenu": 1, "F_AllowExpand": 1, "F_IsPublic": 0, "F_AllowEdit": null, "F_AllowDelete": null, "F_SortCode": 1, "F_DeleteMark": 0, "F_EnabledMark": 1, "F_Description": null, "F_CreateDate": null, "F_CreateUserId": null, "F_CreateUserName": null, "F_ModifyDate": "2016-04-29 11:55:28", "F_ModifyUserId": "System", "F_ModifyUserName": "超级管理员" },
                    { "F_ModuleId": "22", "F_ParentId": "2", "F_EnCode": "OrganizeManage", "F_FullName": "从业人员分析", "F_Icon": "fa fa-sitemap", "F_UrlAddress": "personAnalysis.html", "F_Target": "iframe", "F_IsMenu": 1, "F_AllowExpand": 1, "F_IsPublic": 0, "F_AllowEdit": null, "F_AllowDelete": null, "F_SortCode": 1, "F_DeleteMark": 0, "F_EnabledMark": 1, "F_Description": null, "F_CreateDate": null, "F_CreateUserId": null, "F_CreateUserName": null, "F_ModifyDate": "2016-04-29 11:55:28", "F_ModifyUserId": "System", "F_ModifyUserName": "超级管理员" },
                    { "F_ModuleId": "23", "F_ParentId": "2", "F_EnCode": "OrganizeManage", "F_FullName": "危险品分析", "F_Icon": "fa fa-sitemap", "F_UrlAddress": "goodsAnalysis.html", "F_Target": "iframe", "F_IsMenu": 1, "F_AllowExpand": 1, "F_IsPublic": 0, "F_AllowEdit": null, "F_AllowDelete": null, "F_SortCode": 1, "F_DeleteMark": 0, "F_EnabledMark": 1, "F_Description": null, "F_CreateDate": null, "F_CreateUserId": null, "F_CreateUserName": null, "F_ModifyDate": "2016-04-29 11:55:28", "F_ModifyUserId": "System", "F_ModifyUserName": "超级管理员" },
                    { "F_ModuleId": "24", "F_ParentId": "2", "F_EnCode": "OrganizeManage", "F_FullName": "运输车分析", "F_Icon": "fa fa-sitemap", "F_UrlAddress": "transport_analysis.html", "F_Target": "iframe", "F_IsMenu": 1, "F_AllowExpand": 1, "F_IsPublic": 0, "F_AllowEdit": null, "F_AllowDelete": null, "F_SortCode": 1, "F_DeleteMark": 0, "F_EnabledMark": 1, "F_Description": null, "F_CreateDate": null, "F_CreateUserId": null, "F_CreateUserName": null, "F_ModifyDate": "2016-04-29 11:55:28", "F_ModifyUserId": "System", "F_ModifyUserName": "超级管理员" },
                    { "F_ModuleId": "25", "F_ParentId": "2", "F_EnCode": "OrganizeManage", "F_FullName": "仓库分析", "F_Icon": "fa fa-sitemap", "F_UrlAddress": "houseAnalysis.html", "F_Target": "iframe", "F_IsMenu": 1, "F_AllowExpand": 1, "F_IsPublic": 0, "F_AllowEdit": null, "F_AllowDelete": null, "F_SortCode": 1, "F_DeleteMark": 0, "F_EnabledMark": 1, "F_Description": null, "F_CreateDate": null, "F_CreateUserId": null, "F_CreateUserName": null, "F_ModifyDate": "2016-04-29 11:55:28", "F_ModifyUserId": "System", "F_ModifyUserName": "超级管理员" },
                    { "F_ModuleId": "26", "F_ParentId": "2", "F_EnCode": "OrganizeManage", "F_FullName": "事故分析", "F_Icon": "fa fa-sitemap", "F_UrlAddress": "accidentAnalysis.html", "F_Target": "iframe", "F_IsMenu": 1, "F_AllowExpand": 1, "F_IsPublic": 0, "F_AllowEdit": null, "F_AllowDelete": null, "F_SortCode": 1, "F_DeleteMark": 0, "F_EnabledMark": 1, "F_Description": null, "F_CreateDate": null, "F_CreateUserId": null, "F_CreateUserName": null, "F_ModifyDate": "2016-04-29 11:55:28", "F_ModifyUserId": "System", "F_ModifyUserName": "超级管理员" },

                    { "F_ModuleId": "4", "F_ParentId": "0", "F_EnCode": "SysManage", "F_FullName": "危险品环节分析", "F_Icon": "fa fa-desktop", "F_UrlAddress": "/default", "F_Target": "expand", "F_IsMenu": 0, "F_AllowExpand": 1, "F_IsPublic": 0, "F_AllowEdit": null, "F_AllowDelete": null, "F_SortCode": 1, "F_DeleteMark": 0, "F_EnabledMark": 1, "F_Description": null, "F_CreateDate": null, "F_CreateUserId": null, "F_CreateUserName": null, "F_ModifyDate": "2015-11-17 11:22:46", "F_ModifyUserId": "System", "F_ModifyUserName": "超级管理员" },
                    { "F_ModuleId": "42", "F_ParentId": "4", "F_EnCode": "OrganizeManage", "F_FullName": "危险品生产分析", "F_Icon": "fa fa-sitemap", "F_UrlAddress": "production_Analiysis.html", "F_Target": "iframe", "F_IsMenu": 1, "F_AllowExpand": 1, "F_IsPublic": 0, "F_AllowEdit": null, "F_AllowDelete": null, "F_SortCode": 1, "F_DeleteMark": 0, "F_EnabledMark": 1, "F_Description": null, "F_CreateDate": null, "F_CreateUserId": null, "F_CreateUserName": null, "F_ModifyDate": "2016-04-29 11:55:28", "F_ModifyUserId": "System", "F_ModifyUserName": "超级管理员" },
                    { "F_ModuleId": "43", "F_ParentId": "4", "F_EnCode": "OrganizeManage", "F_FullName": "危险品运输分析", "F_Icon": "fa fa-sitemap", "F_UrlAddress": "car_analysis.html", "F_Target": "iframe", "F_IsMenu": 1, "F_AllowExpand": 1, "F_IsPublic": 0, "F_AllowEdit": null, "F_AllowDelete": null, "F_SortCode": 1, "F_DeleteMark": 0, "F_EnabledMark": 1, "F_Description": null, "F_CreateDate": null, "F_CreateUserId": null, "F_CreateUserName": null, "F_ModifyDate": "2016-04-29 11:55:28", "F_ModifyUserId": "System", "F_ModifyUserName": "超级管理员" },
                    { "F_ModuleId": "44", "F_ParentId": "4", "F_EnCode": "OrganizeManage", "F_FullName": "危险品储存分析", "F_Icon": "fa fa-sitemap", "F_UrlAddress": "save_analysis.html", "F_Target": "iframe", "F_IsMenu": 1, "F_AllowExpand": 1, "F_IsPublic": 0, "F_AllowEdit": null, "F_AllowDelete": null, "F_SortCode": 1, "F_DeleteMark": 0, "F_EnabledMark": 1, "F_Description": null, "F_CreateDate": null, "F_CreateUserId": null, "F_CreateUserName": null, "F_ModifyDate": "2016-04-29 11:55:28", "F_ModifyUserId": "System", "F_ModifyUserName": "超级管理员" },
                    { "F_ModuleId": "45", "F_ParentId": "4", "F_EnCode": "OrganizeManage", "F_FullName": "危险品使用分析", "F_Icon": "fa fa-sitemap", "F_UrlAddress": "use_analysis.html", "F_Target": "iframe", "F_IsMenu": 1, "F_AllowExpand": 1, "F_IsPublic": 0, "F_AllowEdit": null, "F_AllowDelete": null, "F_SortCode": 1, "F_DeleteMark": 0, "F_EnabledMark": 1, "F_Description": null, "F_CreateDate": null, "F_CreateUserId": null, "F_CreateUserName": null, "F_ModifyDate": "2016-04-29 11:55:28", "F_ModifyUserId": "System", "F_ModifyUserName": "超级管理员" },
                    { "F_ModuleId": "46", "F_ParentId": "4", "F_EnCode": "OrganizeManage", "F_FullName": "危险品事故分析", "F_Icon": "fa fa-sitemap", "F_UrlAddress": "accidentAnalysis.html", "F_Target": "iframe", "F_IsMenu": 1, "F_AllowExpand": 1, "F_IsPublic": 0, "F_AllowEdit": null, "F_AllowDelete": null, "F_SortCode": 1, "F_DeleteMark": 0, "F_EnabledMark": 1, "F_Description": null, "F_CreateDate": null, "F_CreateUserId": null, "F_CreateUserName": null, "F_ModifyDate": "2016-04-29 11:55:28", "F_ModifyUserId": "System", "F_ModifyUserName": "超级管理员" },
                    { "F_ModuleId": "47", "F_ParentId": "4", "F_EnCode": "OrganizeManage", "F_FullName": "危险品周边分析", "F_Icon": "fa fa-sitemap", "F_UrlAddress": "rim_analysis.html", "F_Target": "iframe", "F_IsMenu": 1, "F_AllowExpand": 1, "F_IsPublic": 0, "F_AllowEdit": null, "F_AllowDelete": null, "F_SortCode": 1, "F_DeleteMark": 0, "F_EnabledMark": 1, "F_Description": null, "F_CreateDate": null, "F_CreateUserId": null, "F_CreateUserName": null, "F_ModifyDate": "2016-04-29 11:55:28", "F_ModifyUserId": "System", "F_ModifyUserName": "超级管理员" },

                    { "F_ModuleId": "1", "F_ParentId": "0", "F_EnCode": "SysManage", "F_FullName": "预警管理", "F_Icon": "fa fa-desktop", "F_UrlAddress": "/default", "F_Target": "expand", "F_IsMenu": 0, "F_AllowExpand": 1, "F_IsPublic": 0, "F_AllowEdit": null, "F_AllowDelete": null, "F_SortCode": 1, "F_DeleteMark": 0, "F_EnabledMark": 1, "F_Description": null, "F_CreateDate": null, "F_CreateUserId": null, "F_CreateUserName": null, "F_ModifyDate": "2015-11-17 11:22:46", "F_ModifyUserId": "System", "F_ModifyUserName": "超级管理员" },
                    { "F_ModuleId": "12", "F_ParentId": "1", "F_EnCode": "OrganizeManage", "F_FullName": "事故管理", "F_Icon": "fa fa-desktop", "F_UrlAddress": "storyList.html", "F_Target": "iframe", "F_IsMenu": 0, "F_AllowExpand": 1, "F_IsPublic": 0, "F_AllowEdit": null, "F_AllowDelete": null, "F_SortCode": 1, "F_DeleteMark": 0, "F_EnabledMark": 1, "F_Description": null, "F_CreateDate": null, "F_CreateUserId": null, "F_CreateUserName": null, "F_ModifyDate": "2015-11-17 11:22:46", "F_ModifyUserId": "System", "F_ModifyUserName": "超级管理员" },
                    { "F_ModuleId": "13", "F_ParentId": "1", "F_EnCode": "OrganizeManage", "F_FullName": "通知管理", "F_Icon": "fa fa-desktop", "F_UrlAddress": "notice.html", "F_Target": "iframe", "F_IsMenu": 0, "F_AllowExpand": 1, "F_IsPublic": 0, "F_AllowEdit": null, "F_AllowDelete": null, "F_SortCode": 1, "F_DeleteMark": 0, "F_EnabledMark": 1, "F_Description": null, "F_CreateDate": null, "F_CreateUserId": null, "F_CreateUserName": null, "F_ModifyDate": "2015-11-17 11:22:46", "F_ModifyUserId": "System", "F_ModifyUserName": "超级管理员" },

                    { "F_ModuleId": "9", "F_ParentId": "0", "F_EnCode": "SysManage", "F_FullName": "问题管理", "F_Icon": "fa fa-desktop", "F_UrlAddress": "/default", "F_Target": "expand", "F_IsMenu": 0, "F_AllowExpand": 1, "F_IsPublic": 0, "F_AllowEdit": null, "F_AllowDelete": null, "F_SortCode": 1, "F_DeleteMark": 0, "F_EnabledMark": 1, "F_Description": null, "F_CreateDate": null, "F_CreateUserId": null, "F_CreateUserName": null, "F_ModifyDate": "2015-11-17 11:22:46", "F_ModifyUserId": "System", "F_ModifyUserName": "超级管理员" },
                    { "F_ModuleId": "91", "F_ParentId": "9", "F_EnCode": "OrganizeManage", "F_FullName": "安全问题登记", "F_Icon": "fa fa-sitemap", "F_UrlAddress": "safePromblem.html", "F_Target": "iframe", "F_IsMenu": 1, "F_AllowExpand": 1, "F_IsPublic": 0, "F_AllowEdit": null, "F_AllowDelete": null, "F_SortCode": 1, "F_DeleteMark": 0, "F_EnabledMark": 1, "F_Description": null, "F_CreateDate": null, "F_CreateUserId": null, "F_CreateUserName": null, "F_ModifyDate": "2016-04-29 11:55:28", "F_ModifyUserId": "System", "F_ModifyUserName": "超级管理员" },
                    { "F_ModuleId": "92", "F_ParentId": "9", "F_EnCode": "OrganizeManage", "F_FullName": "安全处理", "F_Icon": "fa fa-sitemap", "F_UrlAddress": "safeHandle.html", "F_Target": "iframe", "F_IsMenu": 1, "F_AllowExpand": 1, "F_IsPublic": 0, "F_AllowEdit": null, "F_AllowDelete": null, "F_SortCode": 1, "F_DeleteMark": 0, "F_EnabledMark": 1, "F_Description": null, "F_CreateDate": null, "F_CreateUserId": null, "F_CreateUserName": null, "F_ModifyDate": "2016-04-29 11:55:28", "F_ModifyUserId": "System", "F_ModifyUserName": "超级管理员" },


                    //{ "F_ModuleId": "93", "F_ParentId": "9", "F_EnCode": "OrganizeManage", "F_FullName": "文件上传", "F_Icon": "fa fa-sitemap", "F_UrlAddress": "table4.html", "F_Target": "iframe", "F_IsMenu": 1, "F_AllowExpand": 1, "F_IsPublic": 0, "F_AllowEdit": null, "F_AllowDelete": null, "F_SortCode": 1, "F_DeleteMark": 0, "F_EnabledMark": 1, "F_Description": null, "F_CreateDate": null, "F_CreateUserId": null, "F_CreateUserName": null, "F_ModifyDate": "2016-04-29 11:55:28", "F_ModifyUserId": "System", "F_ModifyUserName": "超级管理员" },
                    //{ "F_ModuleId": "94", "F_ParentId": "9", "F_EnCode": "OrganizeManage", "F_FullName": "加载进度条", "F_Icon": "fa fa-sitemap", "F_UrlAddress": "table2.html", "F_Target": "iframe", "F_IsMenu": 1, "F_AllowExpand": 1, "F_IsPublic": 0, "F_AllowEdit": null, "F_AllowDelete": null, "F_SortCode": 1, "F_DeleteMark": 0, "F_EnabledMark": 1, "F_Description": null, "F_CreateDate": null, "F_CreateUserId": null, "F_CreateUserName": null, "F_ModifyDate": "2016-04-29 11:55:28", "F_ModifyUserId": "System", "F_ModifyUserName": "超级管理员" },
                    //{ "F_ModuleId": "95", "F_ParentId": "9", "F_EnCode": "OrganizeManage", "F_FullName": "省-市-区", "F_Icon": "fa fa-sitemap", "F_UrlAddress": "table5.html", "F_Target": "iframe", "F_IsMenu": 1, "F_AllowExpand": 1, "F_IsPublic": 0, "F_AllowEdit": null, "F_AllowDelete": null, "F_SortCode": 1, "F_DeleteMark": 0, "F_EnabledMark": 1, "F_Description": null, "F_CreateDate": null, "F_CreateUserId": null, "F_CreateUserName": null, "F_ModifyDate": "2016-04-29 11:55:28", "F_ModifyUserId": "System", "F_ModifyUserName": "超级管理员" },
                    //{ "F_ModuleId": "96", "F_ParentId": "9", "F_EnCode": "OrganizeManage", "F_FullName": "tree_table", "F_Icon": "fa fa-sitemap", "F_UrlAddress": "treeTable.html", "F_Target": "iframe", "F_IsMenu": 1, "F_AllowExpand": 1, "F_IsPublic": 0, "F_AllowEdit": null, "F_AllowDelete": null, "F_SortCode": 1, "F_DeleteMark": 0, "F_EnabledMark": 1, "F_Description": null, "F_CreateDate": null, "F_CreateUserId": null, "F_CreateUserName": null, "F_ModifyDate": "2016-04-29 11:55:28", "F_ModifyUserId": "System", "F_ModifyUserName": "超级管理员" },
                    //{ "F_ModuleId": "97", "F_ParentId": "9", "F_EnCode": "OrganizeManage", "F_FullName": "table_tabs", "F_Icon": "fa fa-sitemap", "F_UrlAddress": "tableTabs.html", "F_Target": "iframe", "F_IsMenu": 1, "F_AllowExpand": 1, "F_IsPublic": 0, "F_AllowEdit": null, "F_AllowDelete": null, "F_SortCode": 1, "F_DeleteMark": 0, "F_EnabledMark": 1, "F_Description": null, "F_CreateDate": null, "F_CreateUserId": null, "F_CreateUserName": null, "F_ModifyDate": "2016-04-29 11:55:28", "F_ModifyUserId": "System", "F_ModifyUserName": "超级管理员" },
                    //{ "F_ModuleId": "98", "F_ParentId": "9", "F_EnCode": "OrganizeManage", "F_FullName": "商品详情", "F_Icon": "fa fa-sitemap", "F_UrlAddress": "goods.html", "F_Target": "iframe", "F_IsMenu": 1, "F_AllowExpand": 1, "F_IsPublic": 0, "F_AllowEdit": null, "F_AllowDelete": null, "F_SortCode": 1, "F_DeleteMark": 0, "F_EnabledMark": 1, "F_Description": null, "F_CreateDate": null, "F_CreateUserId": null, "F_CreateUserName": null, "F_ModifyDate": "2016-04-29 11:55:28", "F_ModifyUserId": "System", "F_ModifyUserName": "超级管理员" },
                    //
                    //{ "F_ModuleId": "99", "F_ParentId": "9", "F_EnCode": "OrganizeManage", "F_FullName": "配置管理", "F_Icon": "fa fa-sitemap", "F_UrlAddress": "peizi.html", "F_Target": "iframe", "F_IsMenu": 1, "F_AllowExpand": 1, "F_IsPublic": 0, "F_AllowEdit": null, "F_AllowDelete": null, "F_SortCode": 1, "F_DeleteMark": 0, "F_EnabledMark": 1, "F_Description": null, "F_CreateDate": null, "F_CreateUserId": null, "F_CreateUserName": null, "F_ModifyDate": "2016-04-29 11:55:28", "F_ModifyUserId": "System", "F_ModifyUserName": "超级管理员" },
                    //{ "F_ModuleId": "100", "F_ParentId": "9", "F_EnCode": "OrganizeManage", "F_FullName": "视频界面", "F_Icon": "fa fa-sitemap", "F_UrlAddress": "video.html", "F_Target": "iframe", "F_IsMenu": 1, "F_AllowExpand": 1, "F_IsPublic": 0, "F_AllowEdit": null, "F_AllowDelete": null, "F_SortCode": 1, "F_DeleteMark": 0, "F_EnabledMark": 1, "F_Description": null, "F_CreateDate": null, "F_CreateUserId": null, "F_CreateUserName": null, "F_ModifyDate": "2016-04-29 11:55:28", "F_ModifyUserId": "System", "F_ModifyUserName": "超级管理员" },
                    //
                    //
                    //{ "F_ModuleId": "3", "F_ParentId": "0", "F_EnCode": "SysManage", "F_FullName": "文本管理", "F_Icon": "fa fa-desktop", "F_UrlAddress": "/default", "F_Target": "expand", "F_IsMenu": 0, "F_AllowExpand": 1, "F_IsPublic": 0, "F_AllowEdit": null, "F_AllowDelete": null, "F_SortCode": 1, "F_DeleteMark": 0, "F_EnabledMark": 1, "F_Description": null, "F_CreateDate": null, "F_CreateUserId": null, "F_CreateUserName": null, "F_ModifyDate": "2015-11-17 11:22:46", "F_ModifyUserId": "System", "F_ModifyUserName": "超级管理员" },
                    //{ "F_ModuleId": "31", "F_ParentId": "3", "F_EnCode": "OrganizeManage", "F_FullName": "新闻管理", "F_Icon": "fa fa-sitemap", "F_UrlAddress": "book01.html", "F_Target": "iframe", "F_IsMenu": 1, "F_AllowExpand": 1, "F_IsPublic": 0, "F_AllowEdit": null, "F_AllowDelete": null, "F_SortCode": 1, "F_DeleteMark": 0, "F_EnabledMark": 1, "F_Description": null, "F_CreateDate": null, "F_CreateUserId": null, "F_CreateUserName": null, "F_ModifyDate": "2016-04-29 11:55:28", "F_ModifyUserId": "System", "F_ModifyUserName": "超级管理员" },
                    //{ "F_ModuleId": "31", "F_ParentId": "3", "F_EnCode": "OrganizeManage", "F_FullName": "新闻管理1", "F_Icon": "fa fa-sitemap", "F_UrlAddress": "book02.html", "F_Target": "iframe", "F_IsMenu": 1, "F_AllowExpand": 1, "F_IsPublic": 0, "F_AllowEdit": null, "F_AllowDelete": null, "F_SortCode": 1, "F_DeleteMark": 0, "F_EnabledMark": 1, "F_Description": null, "F_CreateDate": null, "F_CreateUserId": null, "F_CreateUserName": null, "F_ModifyDate": "2016-04-29 11:55:28", "F_ModifyUserId": "System", "F_ModifyUserName": "超级管理员" },
                    //{ "F_ModuleId": "2", "F_ParentId": "0", "F_EnCode": "SysManage", "F_FullName": "统计管理", "F_Icon": "fa fa-desktop", "F_UrlAddress": "/default", "F_Target": "expand", "F_IsMenu": 0, "F_AllowExpand": 1, "F_IsPublic": 0, "F_AllowEdit": null, "F_AllowDelete": null, "F_SortCode": 1, "F_DeleteMark": 0, "F_EnabledMark": 1, "F_Description": null, "F_CreateDate": null, "F_CreateUserId": null, "F_CreateUserName": null, "F_ModifyDate": "2015-11-17 11:22:46", "F_ModifyUserId": "System", "F_ModifyUserName": "超级管理员" },
                    //{ "F_ModuleId": "21", "F_ParentId": "2", "F_EnCode": "OrganizeManage", "F_FullName": "统计表", "F_Icon": "fa fa-sitemap", "F_UrlAddress": "form.html", "F_Target": "iframe", "F_IsMenu": 1, "F_AllowExpand": 1, "F_IsPublic": 0, "F_AllowEdit": null, "F_AllowDelete": null, "F_SortCode": 1, "F_DeleteMark": 0, "F_EnabledMark": 1, "F_Description": null, "F_CreateDate": null, "F_CreateUserId": null, "F_CreateUserName": null, "F_ModifyDate": "2016-04-29 11:55:28", "F_ModifyUserId": "System", "F_ModifyUserName": "超级管理员" },
                    //{ "F_ModuleId": "22", "F_ParentId": "2", "F_EnCode": "OrganizeManage", "F_FullName": "统计分析", "F_Icon": "fa fa-sitemap", "F_UrlAddress": "analysis.html", "F_Target": "iframe", "F_IsMenu": 1, "F_AllowExpand": 1, "F_IsPublic": 0, "F_AllowEdit": null, "F_AllowDelete": null, "F_SortCode": 1, "F_DeleteMark": 0, "F_EnabledMark": 1, "F_Description": null, "F_CreateDate": null, "F_CreateUserId": null, "F_CreateUserName": null, "F_ModifyDate": "2016-04-29 11:55:28", "F_ModifyUserId": "System", "F_ModifyUserName": "超级管理员" },
                    //{ "F_ModuleId": "23", "F_ParentId": "2", "F_EnCode": "OrganizeManage", "F_FullName": "图—表分析", "F_Icon": "fa fa-sitemap", "F_UrlAddress": "from_analysis.html", "F_Target": "iframe", "F_IsMenu": 1, "F_AllowExpand": 1, "F_IsPublic": 0, "F_AllowEdit": null, "F_AllowDelete": null, "F_SortCode": 1, "F_DeleteMark": 0, "F_EnabledMark": 1, "F_Description": null, "F_CreateDate": null, "F_CreateUserId": null, "F_CreateUserName": null, "F_ModifyDate": "2016-04-29 11:55:28", "F_ModifyUserId": "System", "F_ModifyUserName": "超级管理员" },

                ];
            }else if(id==2){
                data=[
                    { "F_ModuleId": "3", "F_ParentId": "0", "F_EnCode": "SysManage", "F_FullName": "基础信息管理", "F_Icon": "fa fa-desktop", "F_UrlAddress": "/default", "F_Target": "expand", "F_IsMenu": 0, "F_AllowExpand": 1, "F_IsPublic": 0, "F_AllowEdit": null, "F_AllowDelete": null, "F_SortCode": 1, "F_DeleteMark": 0, "F_EnabledMark": 1, "F_Description": null, "F_CreateDate": null, "F_CreateUserId": null, "F_CreateUserName": null, "F_ModifyDate": "2015-11-17 11:22:46", "F_ModifyUserId": "System", "F_ModifyUserName": "超级管理员" },
                    { "F_ModuleId": "31", "F_ParentId": "3", "F_EnCode": "OrganizeManage", "F_FullName": "从业单位查询", "F_Icon": "fa fa-sitemap", "F_UrlAddress": "unit.html", "F_Target": "iframe", "F_IsMenu": 1, "F_AllowExpand": 1, "F_IsPublic": 0, "F_AllowEdit": null, "F_AllowDelete": null, "F_SortCode": 1, "F_DeleteMark": 0, "F_EnabledMark": 1, "F_Description": null, "F_CreateDate": null, "F_CreateUserId": null, "F_CreateUserName": null, "F_ModifyDate": "2016-04-29 11:55:28", "F_ModifyUserId": "System", "F_ModifyUserName": "超级管理员" },
                    { "F_ModuleId": "32", "F_ParentId": "3", "F_EnCode": "OrganizeManage", "F_FullName": "重点监控单位", "F_Icon": "fa fa-sitemap", "F_UrlAddress": "unit01.html", "F_Target": "iframe", "F_IsMenu": 1, "F_AllowExpand": 1, "F_IsPublic": 0, "F_AllowEdit": null, "F_AllowDelete": null, "F_SortCode": 1, "F_DeleteMark": 0, "F_EnabledMark": 1, "F_Description": null, "F_CreateDate": null, "F_CreateUserId": null, "F_CreateUserName": null, "F_ModifyDate": "2016-04-29 11:55:28", "F_ModifyUserId": "System", "F_ModifyUserName": "超级管理员" },
                    { "F_ModuleId": "33", "F_ParentId": "3", "F_EnCode": "OrganizeManage", "F_FullName": "从业人员查询", "F_Icon": "fa fa-sitemap", "F_UrlAddress": "person.html", "F_Target": "iframe", "F_IsMenu": 1, "F_AllowExpand": 1, "F_IsPublic": 0, "F_AllowEdit": null, "F_AllowDelete": null, "F_SortCode": 1, "F_DeleteMark": 0, "F_EnabledMark": 1, "F_Description": null, "F_CreateDate": null, "F_CreateUserId": null, "F_CreateUserName": null, "F_ModifyDate": "2016-04-29 11:55:28", "F_ModifyUserId": "System", "F_ModifyUserName": "超级管理员" },
                    { "F_ModuleId": "34", "F_ParentId": "3", "F_EnCode": "OrganizeManage", "F_FullName": "重点监控人员", "F_Icon": "fa fa-sitemap", "F_UrlAddress": "person01.html", "F_Target": "iframe", "F_IsMenu": 1, "F_AllowExpand": 1, "F_IsPublic": 0, "F_AllowEdit": null, "F_AllowDelete": null, "F_SortCode": 1, "F_DeleteMark": 0, "F_EnabledMark": 1, "F_Description": null, "F_CreateDate": null, "F_CreateUserId": null, "F_CreateUserName": null, "F_ModifyDate": "2016-04-29 11:55:28", "F_ModifyUserId": "System", "F_ModifyUserName": "超级管理员" },
                    { "F_ModuleId": "35", "F_ParentId": "3", "F_EnCode": "OrganizeManage", "F_FullName": "危险品查询", "F_Icon": "fa fa-sitemap", "F_UrlAddress": "goods.html", "F_Target": "iframe", "F_IsMenu": 1, "F_AllowExpand": 1, "F_IsPublic": 0, "F_AllowEdit": null, "F_AllowDelete": null, "F_SortCode": 1, "F_DeleteMark": 0, "F_EnabledMark": 1, "F_Description": null, "F_CreateDate": null, "F_CreateUserId": null, "F_CreateUserName": null, "F_ModifyDate": "2016-04-29 11:55:28", "F_ModifyUserId": "System", "F_ModifyUserName": "超级管理员" },
                    { "F_ModuleId": "36", "F_ParentId": "3", "F_EnCode": "OrganizeManage", "F_FullName": "运输车查询", "F_Icon": "fa fa-sitemap", "F_UrlAddress": "carMes.html", "F_Target": "iframe", "F_IsMenu": 1, "F_AllowExpand": 1, "F_IsPublic": 0, "F_AllowEdit": null, "F_AllowDelete": null, "F_SortCode": 1, "F_DeleteMark": 0, "F_EnabledMark": 1, "F_Description": null, "F_CreateDate": null, "F_CreateUserId": null, "F_CreateUserName": null, "F_ModifyDate": "2016-04-29 11:55:28", "F_ModifyUserId": "System", "F_ModifyUserName": "超级管理员" },
                    { "F_ModuleId": "37", "F_ParentId": "3", "F_EnCode": "OrganizeManage", "F_FullName": "仓库查询", "F_Icon": "fa fa-sitemap", "F_UrlAddress": "warehouse.html", "F_Target": "iframe", "F_IsMenu": 1, "F_AllowExpand": 1, "F_IsPublic": 0, "F_AllowEdit": null, "F_AllowDelete": null, "F_SortCode": 1, "F_DeleteMark": 0, "F_EnabledMark": 1, "F_Description": null, "F_CreateDate": null, "F_CreateUserId": null, "F_CreateUserName": null, "F_ModifyDate": "2016-04-29 11:55:28", "F_ModifyUserId": "System", "F_ModifyUserName": "超级管理员" },
                    { "F_ModuleId": "38", "F_ParentId": "3", "F_EnCode": "OrganizeManage", "F_FullName": "事故查询", "F_Icon": "fa fa-sitemap", "F_UrlAddress": "storyList.html", "F_Target": "iframe", "F_IsMenu": 1, "F_AllowExpand": 1, "F_IsPublic": 0, "F_AllowEdit": null, "F_AllowDelete": null, "F_SortCode": 1, "F_DeleteMark": 0, "F_EnabledMark": 1, "F_Description": null, "F_CreateDate": null, "F_CreateUserId": null, "F_CreateUserName": null, "F_ModifyDate": "2016-04-29 11:55:28", "F_ModifyUserId": "System", "F_ModifyUserName": "超级管理员" },

           
                    { "F_ModuleId": "1", "F_ParentId": "0", "F_EnCode": "SysManage", "F_FullName": "预警管理", "F_Icon": "fa fa-desktop", "F_UrlAddress": "/default", "F_Target": "expand", "F_IsMenu": 0, "F_AllowExpand": 1, "F_IsPublic": 0, "F_AllowEdit": null, "F_AllowDelete": null, "F_SortCode": 1, "F_DeleteMark": 0, "F_EnabledMark": 1, "F_Description": null, "F_CreateDate": null, "F_CreateUserId": null, "F_CreateUserName": null, "F_ModifyDate": "2015-11-17 11:22:46", "F_ModifyUserId": "System", "F_ModifyUserName": "超级管理员" },
                    { "F_ModuleId": "11", "F_ParentId": "1", "F_EnCode": "OrganizeManage", "F_FullName": "预警管理", "F_Icon": "fa fa-desktop", "F_UrlAddress": "alam.html", "F_Target": "iframe", "F_IsMenu": 0, "F_AllowExpand": 1, "F_IsPublic": 0, "F_AllowEdit": null, "F_AllowDelete": null, "F_SortCode": 1, "F_DeleteMark": 0, "F_EnabledMark": 1, "F_Description": null, "F_CreateDate": null, "F_CreateUserId": null, "F_CreateUserName": null, "F_ModifyDate": "2015-11-17 11:22:46", "F_ModifyUserId": "System", "F_ModifyUserName": "超级管理员" },
                    { "F_ModuleId": "12", "F_ParentId": "1", "F_EnCode": "OrganizeManage", "F_FullName": "事故管理", "F_Icon": "fa fa-desktop", "F_UrlAddress": "storyList.html", "F_Target": "iframe", "F_IsMenu": 0, "F_AllowExpand": 1, "F_IsPublic": 0, "F_AllowEdit": null, "F_AllowDelete": null, "F_SortCode": 1, "F_DeleteMark": 0, "F_EnabledMark": 1, "F_Description": null, "F_CreateDate": null, "F_CreateUserId": null, "F_CreateUserName": null, "F_ModifyDate": "2015-11-17 11:22:46", "F_ModifyUserId": "System", "F_ModifyUserName": "超级管理员" },
                    { "F_ModuleId": "13", "F_ParentId": "1", "F_EnCode": "OrganizeManage", "F_FullName": "通知管理", "F_Icon": "fa fa-desktop", "F_UrlAddress": "notice.html", "F_Target": "iframe", "F_IsMenu": 0, "F_AllowExpand": 1, "F_IsPublic": 0, "F_AllowEdit": null, "F_AllowDelete": null, "F_SortCode": 1, "F_DeleteMark": 0, "F_EnabledMark": 1, "F_Description": null, "F_CreateDate": null, "F_CreateUserId": null, "F_CreateUserName": null, "F_ModifyDate": "2015-11-17 11:22:46", "F_ModifyUserId": "System", "F_ModifyUserName": "超级管理员" },

           
                    //{ "F_ModuleId": "6", "F_ParentId": "0", "F_EnCode": "SysManage", "F_FullName": "使用管理", "F_Icon": "fa fa-desktop", "F_UrlAddress": "/default", "F_Target": "expand", "F_IsMenu": 0, "F_AllowExpand": 1, "F_IsPublic": 0, "F_AllowEdit": null, "F_AllowDelete": null, "F_SortCode": 1, "F_DeleteMark": 0, "F_EnabledMark": 1, "F_Description": null, "F_CreateDate": null, "F_CreateUserId": null, "F_CreateUserName": null, "F_ModifyDate": "2015-11-17 11:22:46", "F_ModifyUserId": "System", "F_ModifyUserName": "超级管理员" },
                    //{ "F_ModuleId": "61", "F_ParentId": "6", "F_EnCode": "OrganizeManage", "F_FullName": "使用物品查询", "F_Icon": "fa fa-sitemap", "F_UrlAddress": "use.html", "F_Target": "iframe", "F_IsMenu": 1, "F_AllowExpand": 1, "F_IsPublic": 0, "F_AllowEdit": null, "F_AllowDelete": null, "F_SortCode": 1, "F_DeleteMark": 0, "F_EnabledMark": 1, "F_Description": null, "F_CreateDate": null, "F_CreateUserId": null, "F_CreateUserName": null, "F_ModifyDate": "2016-04-29 11:55:28", "F_ModifyUserId": "System", "F_ModifyUserName": "超级管理员" },
                    //{ "F_ModuleId": "62", "F_ParentId": "6", "F_EnCode": "OrganizeManage", "F_FullName": "销毁物品查询", "F_Icon": "fa fa-sitemap", "F_UrlAddress": "destroy.html", "F_Target": "iframe", "F_IsMenu": 1, "F_AllowExpand": 1, "F_IsPublic": 0, "F_AllowEdit": null, "F_AllowDelete": null, "F_SortCode": 1, "F_DeleteMark": 0, "F_EnabledMark": 1, "F_Description": null, "F_CreateDate": null, "F_CreateUserId": null, "F_CreateUserName": null, "F_ModifyDate": "2016-04-29 11:55:28", "F_ModifyUserId": "System", "F_ModifyUserName": "超级管理员" },
                    //{ "F_ModuleId": "62", "F_ParentId": "6", "F_EnCode": "OrganizeManage", "F_FullName": "使用场所分析", "F_Icon": "fa fa-sitemap", "F_UrlAddress": "place.html", "F_Target": "iframe", "F_IsMenu": 1, "F_AllowExpand": 1, "F_IsPublic": 0, "F_AllowEdit": null, "F_AllowDelete": null, "F_SortCode": 1, "F_DeleteMark": 0, "F_EnabledMark": 1, "F_Description": null, "F_CreateDate": null, "F_CreateUserId": null, "F_CreateUserName": null, "F_ModifyDate": "2016-04-29 11:55:28", "F_ModifyUserId": "System", "F_ModifyUserName": "超级管理员" },
                    //{ "F_ModuleId": "62", "F_ParentId": "6", "F_EnCode": "OrganizeManage", "F_FullName": "使用综合分析", "F_Icon": "fa fa-sitemap", "F_UrlAddress": "useComprehensive.html", "F_Target": "iframe", "F_IsMenu": 1, "F_AllowExpand": 1, "F_IsPublic": 0, "F_AllowEdit": null, "F_AllowDelete": null, "F_SortCode": 1, "F_DeleteMark": 0, "F_EnabledMark": 1, "F_Description": null, "F_CreateDate": null, "F_CreateUserId": null, "F_CreateUserName": null, "F_ModifyDate": "2016-04-29 11:55:28", "F_ModifyUserId": "System", "F_ModifyUserName": "超级管理员" },
                    //
                    //{ "F_ModuleId": "9", "F_ParentId": "0", "F_EnCode": "SysManage", "F_FullName": "事故管理", "F_Icon": "fa fa-desktop", "F_UrlAddress": "/default", "F_Target": "expand", "F_IsMenu": 0, "F_AllowExpand": 1, "F_IsPublic": 0, "F_AllowEdit": null, "F_AllowDelete": null, "F_SortCode": 1, "F_DeleteMark": 0, "F_EnabledMark": 1, "F_Description": null, "F_CreateDate": null, "F_CreateUserId": null, "F_CreateUserName": null, "F_ModifyDate": "2015-11-17 11:22:46", "F_ModifyUserId": "System", "F_ModifyUserName": "超级管理员" },
                    //{ "F_ModuleId": "91", "F_ParentId": "9", "F_EnCode": "OrganizeManage", "F_FullName": "事故查询", "F_Icon": "fa fa-sitemap", "F_UrlAddress": "accident.html", "F_Target": "iframe", "F_IsMenu": 1, "F_AllowExpand": 1, "F_IsPublic": 0, "F_AllowEdit": null, "F_AllowDelete": null, "F_SortCode": 1, "F_DeleteMark": 0, "F_EnabledMark": 1, "F_Description": null, "F_CreateDate": null, "F_CreateUserId": null, "F_CreateUserName": null, "F_ModifyDate": "2016-04-29 11:55:28", "F_ModifyUserId": "System", "F_ModifyUserName": "超级管理员" },
                    //{ "F_ModuleId": "92", "F_ParentId": "9", "F_EnCode": "OrganizeManage", "F_FullName": "事故综合分析", "F_Icon": "fa fa-sitemap", "F_UrlAddress": "accidentAnalysis.html", "F_Target": "iframe", "F_IsMenu": 1, "F_AllowExpand": 1, "F_IsPublic": 0, "F_AllowEdit": null, "F_AllowDelete": null, "F_SortCode": 1, "F_DeleteMark": 0, "F_EnabledMark": 1, "F_Description": null, "F_CreateDate": null, "F_CreateUserId": null, "F_CreateUserName": null, "F_ModifyDate": "2016-04-29 11:55:28", "F_ModifyUserId": "System", "F_ModifyUserName": "超级管理员" },


                    //{ "F_ModuleId": "93", "F_ParentId": "9", "F_EnCode": "OrganizeManage", "F_FullName": "文件上传", "F_Icon": "fa fa-sitemap", "F_UrlAddress": "table4.html", "F_Target": "iframe", "F_IsMenu": 1, "F_AllowExpand": 1, "F_IsPublic": 0, "F_AllowEdit": null, "F_AllowDelete": null, "F_SortCode": 1, "F_DeleteMark": 0, "F_EnabledMark": 1, "F_Description": null, "F_CreateDate": null, "F_CreateUserId": null, "F_CreateUserName": null, "F_ModifyDate": "2016-04-29 11:55:28", "F_ModifyUserId": "System", "F_ModifyUserName": "超级管理员" },
                    //{ "F_ModuleId": "94", "F_ParentId": "9", "F_EnCode": "OrganizeManage", "F_FullName": "加载进度条", "F_Icon": "fa fa-sitemap", "F_UrlAddress": "table2.html", "F_Target": "iframe", "F_IsMenu": 1, "F_AllowExpand": 1, "F_IsPublic": 0, "F_AllowEdit": null, "F_AllowDelete": null, "F_SortCode": 1, "F_DeleteMark": 0, "F_EnabledMark": 1, "F_Description": null, "F_CreateDate": null, "F_CreateUserId": null, "F_CreateUserName": null, "F_ModifyDate": "2016-04-29 11:55:28", "F_ModifyUserId": "System", "F_ModifyUserName": "超级管理员" },
                    //{ "F_ModuleId": "95", "F_ParentId": "9", "F_EnCode": "OrganizeManage", "F_FullName": "省-市-区", "F_Icon": "fa fa-sitemap", "F_UrlAddress": "table5.html", "F_Target": "iframe", "F_IsMenu": 1, "F_AllowExpand": 1, "F_IsPublic": 0, "F_AllowEdit": null, "F_AllowDelete": null, "F_SortCode": 1, "F_DeleteMark": 0, "F_EnabledMark": 1, "F_Description": null, "F_CreateDate": null, "F_CreateUserId": null, "F_CreateUserName": null, "F_ModifyDate": "2016-04-29 11:55:28", "F_ModifyUserId": "System", "F_ModifyUserName": "超级管理员" },
                    //{ "F_ModuleId": "96", "F_ParentId": "9", "F_EnCode": "OrganizeManage", "F_FullName": "tree_table", "F_Icon": "fa fa-sitemap", "F_UrlAddress": "treeTable.html", "F_Target": "iframe", "F_IsMenu": 1, "F_AllowExpand": 1, "F_IsPublic": 0, "F_AllowEdit": null, "F_AllowDelete": null, "F_SortCode": 1, "F_DeleteMark": 0, "F_EnabledMark": 1, "F_Description": null, "F_CreateDate": null, "F_CreateUserId": null, "F_CreateUserName": null, "F_ModifyDate": "2016-04-29 11:55:28", "F_ModifyUserId": "System", "F_ModifyUserName": "超级管理员" },
                    //{ "F_ModuleId": "97", "F_ParentId": "9", "F_EnCode": "OrganizeManage", "F_FullName": "table_tabs", "F_Icon": "fa fa-sitemap", "F_UrlAddress": "tableTabs.html", "F_Target": "iframe", "F_IsMenu": 1, "F_AllowExpand": 1, "F_IsPublic": 0, "F_AllowEdit": null, "F_AllowDelete": null, "F_SortCode": 1, "F_DeleteMark": 0, "F_EnabledMark": 1, "F_Description": null, "F_CreateDate": null, "F_CreateUserId": null, "F_CreateUserName": null, "F_ModifyDate": "2016-04-29 11:55:28", "F_ModifyUserId": "System", "F_ModifyUserName": "超级管理员" },
                    //{ "F_ModuleId": "98", "F_ParentId": "9", "F_EnCode": "OrganizeManage", "F_FullName": "商品详情", "F_Icon": "fa fa-sitemap", "F_UrlAddress": "goods.html", "F_Target": "iframe", "F_IsMenu": 1, "F_AllowExpand": 1, "F_IsPublic": 0, "F_AllowEdit": null, "F_AllowDelete": null, "F_SortCode": 1, "F_DeleteMark": 0, "F_EnabledMark": 1, "F_Description": null, "F_CreateDate": null, "F_CreateUserId": null, "F_CreateUserName": null, "F_ModifyDate": "2016-04-29 11:55:28", "F_ModifyUserId": "System", "F_ModifyUserName": "超级管理员" },
                    //
                    //{ "F_ModuleId": "99", "F_ParentId": "9", "F_EnCode": "OrganizeManage", "F_FullName": "配置管理", "F_Icon": "fa fa-sitemap", "F_UrlAddress": "peizi.html", "F_Target": "iframe", "F_IsMenu": 1, "F_AllowExpand": 1, "F_IsPublic": 0, "F_AllowEdit": null, "F_AllowDelete": null, "F_SortCode": 1, "F_DeleteMark": 0, "F_EnabledMark": 1, "F_Description": null, "F_CreateDate": null, "F_CreateUserId": null, "F_CreateUserName": null, "F_ModifyDate": "2016-04-29 11:55:28", "F_ModifyUserId": "System", "F_ModifyUserName": "超级管理员" },
                    //{ "F_ModuleId": "100", "F_ParentId": "9", "F_EnCode": "OrganizeManage", "F_FullName": "视频界面", "F_Icon": "fa fa-sitemap", "F_UrlAddress": "video.html", "F_Target": "iframe", "F_IsMenu": 1, "F_AllowExpand": 1, "F_IsPublic": 0, "F_AllowEdit": null, "F_AllowDelete": null, "F_SortCode": 1, "F_DeleteMark": 0, "F_EnabledMark": 1, "F_Description": null, "F_CreateDate": null, "F_CreateUserId": null, "F_CreateUserName": null, "F_ModifyDate": "2016-04-29 11:55:28", "F_ModifyUserId": "System", "F_ModifyUserName": "超级管理员" },
                    //
                    //
                    //{ "F_ModuleId": "3", "F_ParentId": "0", "F_EnCode": "SysManage", "F_FullName": "文本管理", "F_Icon": "fa fa-desktop", "F_UrlAddress": "/default", "F_Target": "expand", "F_IsMenu": 0, "F_AllowExpand": 1, "F_IsPublic": 0, "F_AllowEdit": null, "F_AllowDelete": null, "F_SortCode": 1, "F_DeleteMark": 0, "F_EnabledMark": 1, "F_Description": null, "F_CreateDate": null, "F_CreateUserId": null, "F_CreateUserName": null, "F_ModifyDate": "2015-11-17 11:22:46", "F_ModifyUserId": "System", "F_ModifyUserName": "超级管理员" },
                    //{ "F_ModuleId": "31", "F_ParentId": "3", "F_EnCode": "OrganizeManage", "F_FullName": "新闻管理", "F_Icon": "fa fa-sitemap", "F_UrlAddress": "book01.html", "F_Target": "iframe", "F_IsMenu": 1, "F_AllowExpand": 1, "F_IsPublic": 0, "F_AllowEdit": null, "F_AllowDelete": null, "F_SortCode": 1, "F_DeleteMark": 0, "F_EnabledMark": 1, "F_Description": null, "F_CreateDate": null, "F_CreateUserId": null, "F_CreateUserName": null, "F_ModifyDate": "2016-04-29 11:55:28", "F_ModifyUserId": "System", "F_ModifyUserName": "超级管理员" },
                    //{ "F_ModuleId": "31", "F_ParentId": "3", "F_EnCode": "OrganizeManage", "F_FullName": "新闻管理1", "F_Icon": "fa fa-sitemap", "F_UrlAddress": "book02.html", "F_Target": "iframe", "F_IsMenu": 1, "F_AllowExpand": 1, "F_IsPublic": 0, "F_AllowEdit": null, "F_AllowDelete": null, "F_SortCode": 1, "F_DeleteMark": 0, "F_EnabledMark": 1, "F_Description": null, "F_CreateDate": null, "F_CreateUserId": null, "F_CreateUserName": null, "F_ModifyDate": "2016-04-29 11:55:28", "F_ModifyUserId": "System", "F_ModifyUserName": "超级管理员" },
                    //{ "F_ModuleId": "2", "F_ParentId": "0", "F_EnCode": "SysManage", "F_FullName": "统计管理", "F_Icon": "fa fa-desktop", "F_UrlAddress": "/default", "F_Target": "expand", "F_IsMenu": 0, "F_AllowExpand": 1, "F_IsPublic": 0, "F_AllowEdit": null, "F_AllowDelete": null, "F_SortCode": 1, "F_DeleteMark": 0, "F_EnabledMark": 1, "F_Description": null, "F_CreateDate": null, "F_CreateUserId": null, "F_CreateUserName": null, "F_ModifyDate": "2015-11-17 11:22:46", "F_ModifyUserId": "System", "F_ModifyUserName": "超级管理员" },
                    //{ "F_ModuleId": "21", "F_ParentId": "2", "F_EnCode": "OrganizeManage", "F_FullName": "统计表", "F_Icon": "fa fa-sitemap", "F_UrlAddress": "form.html", "F_Target": "iframe", "F_IsMenu": 1, "F_AllowExpand": 1, "F_IsPublic": 0, "F_AllowEdit": null, "F_AllowDelete": null, "F_SortCode": 1, "F_DeleteMark": 0, "F_EnabledMark": 1, "F_Description": null, "F_CreateDate": null, "F_CreateUserId": null, "F_CreateUserName": null, "F_ModifyDate": "2016-04-29 11:55:28", "F_ModifyUserId": "System", "F_ModifyUserName": "超级管理员" },
                    //{ "F_ModuleId": "22", "F_ParentId": "2", "F_EnCode": "OrganizeManage", "F_FullName": "统计分析", "F_Icon": "fa fa-sitemap", "F_UrlAddress": "analysis.html", "F_Target": "iframe", "F_IsMenu": 1, "F_AllowExpand": 1, "F_IsPublic": 0, "F_AllowEdit": null, "F_AllowDelete": null, "F_SortCode": 1, "F_DeleteMark": 0, "F_EnabledMark": 1, "F_Description": null, "F_CreateDate": null, "F_CreateUserId": null, "F_CreateUserName": null, "F_ModifyDate": "2016-04-29 11:55:28", "F_ModifyUserId": "System", "F_ModifyUserName": "超级管理员" },
                    //{ "F_ModuleId": "23", "F_ParentId": "2", "F_EnCode": "OrganizeManage", "F_FullName": "图—表分析", "F_Icon": "fa fa-sitemap", "F_UrlAddress": "from_analysis.html", "F_Target": "iframe", "F_IsMenu": 1, "F_AllowExpand": 1, "F_IsPublic": 0, "F_AllowEdit": null, "F_AllowDelete": null, "F_SortCode": 1, "F_DeleteMark": 0, "F_EnabledMark": 1, "F_Description": null, "F_CreateDate": null, "F_CreateUserId": null, "F_CreateUserName": null, "F_ModifyDate": "2016-04-29 11:55:28", "F_ModifyUserId": "System", "F_ModifyUserName": "超级管理员" },
                    //
                ];
            }else if(id==3){
                data=[

                    { "F_ModuleId": "6", "F_ParentId": "0", "F_EnCode": "SysManage", "F_FullName": "系统管理", "F_Icon": "fa fa-desktop", "F_UrlAddress": "/default", "F_Target": "expand", "F_IsMenu": 0, "F_AllowExpand": 1, "F_IsPublic": 0, "F_AllowEdit": null, "F_AllowDelete": null, "F_SortCode": 1, "F_DeleteMark": 0, "F_EnabledMark": 1, "F_Description": null, "F_CreateDate": null, "F_CreateUserId": null, "F_CreateUserName": null, "F_ModifyDate": "2015-11-17 11:22:46", "F_ModifyUserId": "System", "F_ModifyUserName": "超级管理员" },
                    { "F_ModuleId": "61", "F_ParentId": "6", "F_EnCode": "OrganizeManage", "F_FullName": "角色管理", "F_Icon": "fa fa-sitemap", "F_UrlAddress": "role.html", "F_Target": "iframe", "F_IsMenu": 1, "F_AllowExpand": 1, "F_IsPublic": 0, "F_AllowEdit": null, "F_AllowDelete": null, "F_SortCode": 1, "F_DeleteMark": 0, "F_EnabledMark": 1, "F_Description": null, "F_CreateDate": null, "F_CreateUserId": null, "F_CreateUserName": null, "F_ModifyDate": "2016-04-29 11:55:28", "F_ModifyUserId": "System", "F_ModifyUserName": "超级管理员" },
                    { "F_ModuleId": "62", "F_ParentId": "6", "F_EnCode": "OrganizeManage", "F_FullName": "用户管理", "F_Icon": "fa fa-sitemap", "F_UrlAddress": "user1.html", "F_Target": "iframe", "F_IsMenu": 1, "F_AllowExpand": 1, "F_IsPublic": 0, "F_AllowEdit": null, "F_AllowDelete": null, "F_SortCode": 1, "F_DeleteMark": 0, "F_EnabledMark": 1, "F_Description": null, "F_CreateDate": null, "F_CreateUserId": null, "F_CreateUserName": null, "F_ModifyDate": "2016-04-29 11:55:28", "F_ModifyUserId": "System", "F_ModifyUserName": "超级管理员" },
                    { "F_ModuleId": "63", "F_ParentId": "6", "F_EnCode": "OrganizeManage", "F_FullName": "区域管理", "F_Icon": "fa fa-sitemap", "F_UrlAddress": "department1.html", "F_Target": "iframe", "F_IsMenu": 1, "F_AllowExpand": 1, "F_IsPublic": 0, "F_AllowEdit": null, "F_AllowDelete": null, "F_SortCode": 1, "F_DeleteMark": 0, "F_EnabledMark": 1, "F_Description": null, "F_CreateDate": null, "F_CreateUserId": null, "F_CreateUserName": null, "F_ModifyDate": "2016-04-29 11:55:28", "F_ModifyUserId": "System", "F_ModifyUserName": "超级管理员" },
                    { "F_ModuleId": "64", "F_ParentId": "6", "F_EnCode": "OrganizeManage", "F_FullName": "日志管理", "F_Icon": "fa fa-sitemap", "F_UrlAddress": "log.html", "F_Target": "iframe", "F_IsMenu": 1, "F_AllowExpand": 1, "F_IsPublic": 0, "F_AllowEdit": null, "F_AllowDelete": null, "F_SortCode": 1, "F_DeleteMark": 0, "F_EnabledMark": 1, "F_Description": null, "F_CreateDate": null, "F_CreateUserId": null, "F_CreateUserName": null, "F_ModifyDate": "2016-04-29 11:55:28", "F_ModifyUserId": "System", "F_ModifyUserName": "超级管理员" },
                    { "F_ModuleId": "64", "F_ParentId": "6", "F_EnCode": "OrganizeManage", "F_FullName": "系统日志", "F_Icon": "fa fa-sitemap", "F_UrlAddress": "systemLog.html", "F_Target": "iframe", "F_IsMenu": 1, "F_AllowExpand": 1, "F_IsPublic": 0, "F_AllowEdit": null, "F_AllowDelete": null, "F_SortCode": 1, "F_DeleteMark": 0, "F_EnabledMark": 1, "F_Description": null, "F_CreateDate": null, "F_CreateUserId": null, "F_CreateUserName": null, "F_ModifyDate": "2016-04-29 11:55:28", "F_ModifyUserId": "System", "F_ModifyUserName": "超级管理员" },

                    { "F_ModuleId": "9", "F_ParentId": "0", "F_EnCode": "SysManage", "F_FullName": "数据交换管理", "F_Icon": "fa fa-desktop", "F_UrlAddress": "/default", "F_Target": "expand", "F_IsMenu": 0, "F_AllowExpand": 1, "F_IsPublic": 0, "F_AllowEdit": null, "F_AllowDelete": null, "F_SortCode": 1, "F_DeleteMark": 0, "F_EnabledMark": 1, "F_Description": null, "F_CreateDate": null, "F_CreateUserId": null, "F_CreateUserName": null, "F_ModifyDate": "2015-11-17 11:22:46", "F_ModifyUserId": "System", "F_ModifyUserName": "超级管理员" },
                    { "F_ModuleId": "91", "F_ParentId": "9", "F_EnCode": "OrganizeManage", "F_FullName": "服务访问记录日志", "F_Icon": "fa fa-sitemap", "F_UrlAddress": "dataExchange.html", "F_Target": "iframe", "F_IsMenu": 1, "F_AllowExpand": 1, "F_IsPublic": 0, "F_AllowEdit": null, "F_AllowDelete": null, "F_SortCode": 1, "F_DeleteMark": 0, "F_EnabledMark": 1, "F_Description": null, "F_CreateDate": null, "F_CreateUserId": null, "F_CreateUserName": null, "F_ModifyDate": "2016-04-29 11:55:28", "F_ModifyUserId": "System", "F_ModifyUserName": "超级管理员" },

                    { "F_ModuleId": "3", "F_ParentId": "0", "F_EnCode": "SysManage", "F_FullName": "数据源管理", "F_Icon": "fa fa-desktop", "F_UrlAddress": "/default", "F_Target": "expand", "F_IsMenu": 0, "F_AllowExpand": 1, "F_IsPublic": 0, "F_AllowEdit": null, "F_AllowDelete": null, "F_SortCode": 1, "F_DeleteMark": 0, "F_EnabledMark": 1, "F_Description": null, "F_CreateDate": null, "F_CreateUserId": null, "F_CreateUserName": null, "F_ModifyDate": "2015-11-17 11:22:46", "F_ModifyUserId": "System", "F_ModifyUserName": "超级管理员" },
                    { "F_ModuleId": "31", "F_ParentId": "3", "F_EnCode": "OrganizeManage", "F_FullName": "数据源管理", "F_Icon": "fa fa-sitemap", "F_UrlAddress": "dataSource.html", "F_Target": "iframe", "F_IsMenu": 1, "F_AllowExpand": 1, "F_IsPublic": 0, "F_AllowEdit": null, "F_AllowDelete": null, "F_SortCode": 1, "F_DeleteMark": 0, "F_EnabledMark": 1, "F_Description": null, "F_CreateDate": null, "F_CreateUserId": null, "F_CreateUserName": null, "F_ModifyDate": "2016-04-29 11:55:28", "F_ModifyUserId": "System", "F_ModifyUserName": "超级管理员" },

                    //{ "F_ModuleId": "6", "F_ParentId": "0", "F_EnCode": "SysManage", "F_FullName": "使用管理", "F_Icon": "fa fa-desktop", "F_UrlAddress": "/default", "F_Target": "expand", "F_IsMenu": 0, "F_AllowExpand": 1, "F_IsPublic": 0, "F_AllowEdit": null, "F_AllowDelete": null, "F_SortCode": 1, "F_DeleteMark": 0, "F_EnabledMark": 1, "F_Description": null, "F_CreateDate": null, "F_CreateUserId": null, "F_CreateUserName": null, "F_ModifyDate": "2015-11-17 11:22:46", "F_ModifyUserId": "System", "F_ModifyUserName": "超级管理员" },
                    //{ "F_ModuleId": "61", "F_ParentId": "6", "F_EnCode": "OrganizeManage", "F_FullName": "使用物品查询", "F_Icon": "fa fa-sitemap", "F_UrlAddress": "use.html", "F_Target": "iframe", "F_IsMenu": 1, "F_AllowExpand": 1, "F_IsPublic": 0, "F_AllowEdit": null, "F_AllowDelete": null, "F_SortCode": 1, "F_DeleteMark": 0, "F_EnabledMark": 1, "F_Description": null, "F_CreateDate": null, "F_CreateUserId": null, "F_CreateUserName": null, "F_ModifyDate": "2016-04-29 11:55:28", "F_ModifyUserId": "System", "F_ModifyUserName": "超级管理员" },
                    //{ "F_ModuleId": "62", "F_ParentId": "6", "F_EnCode": "OrganizeManage", "F_FullName": "销毁物品查询", "F_Icon": "fa fa-sitemap", "F_UrlAddress": "destroy.html", "F_Target": "iframe", "F_IsMenu": 1, "F_AllowExpand": 1, "F_IsPublic": 0, "F_AllowEdit": null, "F_AllowDelete": null, "F_SortCode": 1, "F_DeleteMark": 0, "F_EnabledMark": 1, "F_Description": null, "F_CreateDate": null, "F_CreateUserId": null, "F_CreateUserName": null, "F_ModifyDate": "2016-04-29 11:55:28", "F_ModifyUserId": "System", "F_ModifyUserName": "超级管理员" },
                    //{ "F_ModuleId": "62", "F_ParentId": "6", "F_EnCode": "OrganizeManage", "F_FullName": "使用场所分析", "F_Icon": "fa fa-sitemap", "F_UrlAddress": "place.html", "F_Target": "iframe", "F_IsMenu": 1, "F_AllowExpand": 1, "F_IsPublic": 0, "F_AllowEdit": null, "F_AllowDelete": null, "F_SortCode": 1, "F_DeleteMark": 0, "F_EnabledMark": 1, "F_Description": null, "F_CreateDate": null, "F_CreateUserId": null, "F_CreateUserName": null, "F_ModifyDate": "2016-04-29 11:55:28", "F_ModifyUserId": "System", "F_ModifyUserName": "超级管理员" },
                    //{ "F_ModuleId": "62", "F_ParentId": "6", "F_EnCode": "OrganizeManage", "F_FullName": "使用综合分析", "F_Icon": "fa fa-sitemap", "F_UrlAddress": "useComprehensive.html", "F_Target": "iframe", "F_IsMenu": 1, "F_AllowExpand": 1, "F_IsPublic": 0, "F_AllowEdit": null, "F_AllowDelete": null, "F_SortCode": 1, "F_DeleteMark": 0, "F_EnabledMark": 1, "F_Description": null, "F_CreateDate": null, "F_CreateUserId": null, "F_CreateUserName": null, "F_ModifyDate": "2016-04-29 11:55:28", "F_ModifyUserId": "System", "F_ModifyUserName": "超级管理员" },
                    //
                    //{ "F_ModuleId": "9", "F_ParentId": "0", "F_EnCode": "SysManage", "F_FullName": "事故管理", "F_Icon": "fa fa-desktop", "F_UrlAddress": "/default", "F_Target": "expand", "F_IsMenu": 0, "F_AllowExpand": 1, "F_IsPublic": 0, "F_AllowEdit": null, "F_AllowDelete": null, "F_SortCode": 1, "F_DeleteMark": 0, "F_EnabledMark": 1, "F_Description": null, "F_CreateDate": null, "F_CreateUserId": null, "F_CreateUserName": null, "F_ModifyDate": "2015-11-17 11:22:46", "F_ModifyUserId": "System", "F_ModifyUserName": "超级管理员" },
                    //{ "F_ModuleId": "91", "F_ParentId": "9", "F_EnCode": "OrganizeManage", "F_FullName": "事故查询", "F_Icon": "fa fa-sitemap", "F_UrlAddress": "accident.html", "F_Target": "iframe", "F_IsMenu": 1, "F_AllowExpand": 1, "F_IsPublic": 0, "F_AllowEdit": null, "F_AllowDelete": null, "F_SortCode": 1, "F_DeleteMark": 0, "F_EnabledMark": 1, "F_Description": null, "F_CreateDate": null, "F_CreateUserId": null, "F_CreateUserName": null, "F_ModifyDate": "2016-04-29 11:55:28", "F_ModifyUserId": "System", "F_ModifyUserName": "超级管理员" },
                    //{ "F_ModuleId": "92", "F_ParentId": "9", "F_EnCode": "OrganizeManage", "F_FullName": "事故综合分析", "F_Icon": "fa fa-sitemap", "F_UrlAddress": "accidentAnalysis.html", "F_Target": "iframe", "F_IsMenu": 1, "F_AllowExpand": 1, "F_IsPublic": 0, "F_AllowEdit": null, "F_AllowDelete": null, "F_SortCode": 1, "F_DeleteMark": 0, "F_EnabledMark": 1, "F_Description": null, "F_CreateDate": null, "F_CreateUserId": null, "F_CreateUserName": null, "F_ModifyDate": "2016-04-29 11:55:28", "F_ModifyUserId": "System", "F_ModifyUserName": "超级管理员" },


                    //{ "F_ModuleId": "93", "F_ParentId": "9", "F_EnCode": "OrganizeManage", "F_FullName": "文件上传", "F_Icon": "fa fa-sitemap", "F_UrlAddress": "table4.html", "F_Target": "iframe", "F_IsMenu": 1, "F_AllowExpand": 1, "F_IsPublic": 0, "F_AllowEdit": null, "F_AllowDelete": null, "F_SortCode": 1, "F_DeleteMark": 0, "F_EnabledMark": 1, "F_Description": null, "F_CreateDate": null, "F_CreateUserId": null, "F_CreateUserName": null, "F_ModifyDate": "2016-04-29 11:55:28", "F_ModifyUserId": "System", "F_ModifyUserName": "超级管理员" },
                    //{ "F_ModuleId": "94", "F_ParentId": "9", "F_EnCode": "OrganizeManage", "F_FullName": "加载进度条", "F_Icon": "fa fa-sitemap", "F_UrlAddress": "table2.html", "F_Target": "iframe", "F_IsMenu": 1, "F_AllowExpand": 1, "F_IsPublic": 0, "F_AllowEdit": null, "F_AllowDelete": null, "F_SortCode": 1, "F_DeleteMark": 0, "F_EnabledMark": 1, "F_Description": null, "F_CreateDate": null, "F_CreateUserId": null, "F_CreateUserName": null, "F_ModifyDate": "2016-04-29 11:55:28", "F_ModifyUserId": "System", "F_ModifyUserName": "超级管理员" },
                    //{ "F_ModuleId": "95", "F_ParentId": "9", "F_EnCode": "OrganizeManage", "F_FullName": "省-市-区", "F_Icon": "fa fa-sitemap", "F_UrlAddress": "table5.html", "F_Target": "iframe", "F_IsMenu": 1, "F_AllowExpand": 1, "F_IsPublic": 0, "F_AllowEdit": null, "F_AllowDelete": null, "F_SortCode": 1, "F_DeleteMark": 0, "F_EnabledMark": 1, "F_Description": null, "F_CreateDate": null, "F_CreateUserId": null, "F_CreateUserName": null, "F_ModifyDate": "2016-04-29 11:55:28", "F_ModifyUserId": "System", "F_ModifyUserName": "超级管理员" },
                    //{ "F_ModuleId": "96", "F_ParentId": "9", "F_EnCode": "OrganizeManage", "F_FullName": "tree_table", "F_Icon": "fa fa-sitemap", "F_UrlAddress": "treeTable.html", "F_Target": "iframe", "F_IsMenu": 1, "F_AllowExpand": 1, "F_IsPublic": 0, "F_AllowEdit": null, "F_AllowDelete": null, "F_SortCode": 1, "F_DeleteMark": 0, "F_EnabledMark": 1, "F_Description": null, "F_CreateDate": null, "F_CreateUserId": null, "F_CreateUserName": null, "F_ModifyDate": "2016-04-29 11:55:28", "F_ModifyUserId": "System", "F_ModifyUserName": "超级管理员" },
                    //{ "F_ModuleId": "97", "F_ParentId": "9", "F_EnCode": "OrganizeManage", "F_FullName": "table_tabs", "F_Icon": "fa fa-sitemap", "F_UrlAddress": "tableTabs.html", "F_Target": "iframe", "F_IsMenu": 1, "F_AllowExpand": 1, "F_IsPublic": 0, "F_AllowEdit": null, "F_AllowDelete": null, "F_SortCode": 1, "F_DeleteMark": 0, "F_EnabledMark": 1, "F_Description": null, "F_CreateDate": null, "F_CreateUserId": null, "F_CreateUserName": null, "F_ModifyDate": "2016-04-29 11:55:28", "F_ModifyUserId": "System", "F_ModifyUserName": "超级管理员" },
                    //{ "F_ModuleId": "98", "F_ParentId": "9", "F_EnCode": "OrganizeManage", "F_FullName": "商品详情", "F_Icon": "fa fa-sitemap", "F_UrlAddress": "goods.html", "F_Target": "iframe", "F_IsMenu": 1, "F_AllowExpand": 1, "F_IsPublic": 0, "F_AllowEdit": null, "F_AllowDelete": null, "F_SortCode": 1, "F_DeleteMark": 0, "F_EnabledMark": 1, "F_Description": null, "F_CreateDate": null, "F_CreateUserId": null, "F_CreateUserName": null, "F_ModifyDate": "2016-04-29 11:55:28", "F_ModifyUserId": "System", "F_ModifyUserName": "超级管理员" },
                    //
                    //{ "F_ModuleId": "99", "F_ParentId": "9", "F_EnCode": "OrganizeManage", "F_FullName": "配置管理", "F_Icon": "fa fa-sitemap", "F_UrlAddress": "peizi.html", "F_Target": "iframe", "F_IsMenu": 1, "F_AllowExpand": 1, "F_IsPublic": 0, "F_AllowEdit": null, "F_AllowDelete": null, "F_SortCode": 1, "F_DeleteMark": 0, "F_EnabledMark": 1, "F_Description": null, "F_CreateDate": null, "F_CreateUserId": null, "F_CreateUserName": null, "F_ModifyDate": "2016-04-29 11:55:28", "F_ModifyUserId": "System", "F_ModifyUserName": "超级管理员" },
                    //{ "F_ModuleId": "100", "F_ParentId": "9", "F_EnCode": "OrganizeManage", "F_FullName": "视频界面", "F_Icon": "fa fa-sitemap", "F_UrlAddress": "video.html", "F_Target": "iframe", "F_IsMenu": 1, "F_AllowExpand": 1, "F_IsPublic": 0, "F_AllowEdit": null, "F_AllowDelete": null, "F_SortCode": 1, "F_DeleteMark": 0, "F_EnabledMark": 1, "F_Description": null, "F_CreateDate": null, "F_CreateUserId": null, "F_CreateUserName": null, "F_ModifyDate": "2016-04-29 11:55:28", "F_ModifyUserId": "System", "F_ModifyUserName": "超级管理员" },
                    //
                    //
                    //{ "F_ModuleId": "3", "F_ParentId": "0", "F_EnCode": "SysManage", "F_FullName": "文本管理", "F_Icon": "fa fa-desktop", "F_UrlAddress": "/default", "F_Target": "expand", "F_IsMenu": 0, "F_AllowExpand": 1, "F_IsPublic": 0, "F_AllowEdit": null, "F_AllowDelete": null, "F_SortCode": 1, "F_DeleteMark": 0, "F_EnabledMark": 1, "F_Description": null, "F_CreateDate": null, "F_CreateUserId": null, "F_CreateUserName": null, "F_ModifyDate": "2015-11-17 11:22:46", "F_ModifyUserId": "System", "F_ModifyUserName": "超级管理员" },
                    //{ "F_ModuleId": "31", "F_ParentId": "3", "F_EnCode": "OrganizeManage", "F_FullName": "新闻管理", "F_Icon": "fa fa-sitemap", "F_UrlAddress": "book01.html", "F_Target": "iframe", "F_IsMenu": 1, "F_AllowExpand": 1, "F_IsPublic": 0, "F_AllowEdit": null, "F_AllowDelete": null, "F_SortCode": 1, "F_DeleteMark": 0, "F_EnabledMark": 1, "F_Description": null, "F_CreateDate": null, "F_CreateUserId": null, "F_CreateUserName": null, "F_ModifyDate": "2016-04-29 11:55:28", "F_ModifyUserId": "System", "F_ModifyUserName": "超级管理员" },
                    //{ "F_ModuleId": "31", "F_ParentId": "3", "F_EnCode": "OrganizeManage", "F_FullName": "新闻管理1", "F_Icon": "fa fa-sitemap", "F_UrlAddress": "book02.html", "F_Target": "iframe", "F_IsMenu": 1, "F_AllowExpand": 1, "F_IsPublic": 0, "F_AllowEdit": null, "F_AllowDelete": null, "F_SortCode": 1, "F_DeleteMark": 0, "F_EnabledMark": 1, "F_Description": null, "F_CreateDate": null, "F_CreateUserId": null, "F_CreateUserName": null, "F_ModifyDate": "2016-04-29 11:55:28", "F_ModifyUserId": "System", "F_ModifyUserName": "超级管理员" },
                    //{ "F_ModuleId": "2", "F_ParentId": "0", "F_EnCode": "SysManage", "F_FullName": "统计管理", "F_Icon": "fa fa-desktop", "F_UrlAddress": "/default", "F_Target": "expand", "F_IsMenu": 0, "F_AllowExpand": 1, "F_IsPublic": 0, "F_AllowEdit": null, "F_AllowDelete": null, "F_SortCode": 1, "F_DeleteMark": 0, "F_EnabledMark": 1, "F_Description": null, "F_CreateDate": null, "F_CreateUserId": null, "F_CreateUserName": null, "F_ModifyDate": "2015-11-17 11:22:46", "F_ModifyUserId": "System", "F_ModifyUserName": "超级管理员" },
                    //{ "F_ModuleId": "21", "F_ParentId": "2", "F_EnCode": "OrganizeManage", "F_FullName": "统计表", "F_Icon": "fa fa-sitemap", "F_UrlAddress": "form.html", "F_Target": "iframe", "F_IsMenu": 1, "F_AllowExpand": 1, "F_IsPublic": 0, "F_AllowEdit": null, "F_AllowDelete": null, "F_SortCode": 1, "F_DeleteMark": 0, "F_EnabledMark": 1, "F_Description": null, "F_CreateDate": null, "F_CreateUserId": null, "F_CreateUserName": null, "F_ModifyDate": "2016-04-29 11:55:28", "F_ModifyUserId": "System", "F_ModifyUserName": "超级管理员" },
                    //{ "F_ModuleId": "22", "F_ParentId": "2", "F_EnCode": "OrganizeManage", "F_FullName": "统计分析", "F_Icon": "fa fa-sitemap", "F_UrlAddress": "analysis.html", "F_Target": "iframe", "F_IsMenu": 1, "F_AllowExpand": 1, "F_IsPublic": 0, "F_AllowEdit": null, "F_AllowDelete": null, "F_SortCode": 1, "F_DeleteMark": 0, "F_EnabledMark": 1, "F_Description": null, "F_CreateDate": null, "F_CreateUserId": null, "F_CreateUserName": null, "F_ModifyDate": "2016-04-29 11:55:28", "F_ModifyUserId": "System", "F_ModifyUserName": "超级管理员" },
                    //{ "F_ModuleId": "23", "F_ParentId": "2", "F_EnCode": "OrganizeManage", "F_FullName": "图—表分析", "F_Icon": "fa fa-sitemap", "F_UrlAddress": "from_analysis.html", "F_Target": "iframe", "F_IsMenu": 1, "F_AllowExpand": 1, "F_IsPublic": 0, "F_AllowEdit": null, "F_AllowDelete": null, "F_SortCode": 1, "F_DeleteMark": 0, "F_EnabledMark": 1, "F_Description": null, "F_CreateDate": null, "F_CreateUserId": null, "F_CreateUserName": null, "F_ModifyDate": "2016-04-29 11:55:28", "F_ModifyUserId": "System", "F_ModifyUserName": "超级管理员" },
                    //
                ]; 
            } else {
                data = [
                  { "F_ModuleId": "1", "F_ParentId": "0", "F_EnCode": "SysManage", "F_FullName": "DYB_办公主体管理", "F_Icon": "fa fa-desktop", "F_UrlAddress": "/default", "F_Target": "expand", "F_IsMenu": 0, "F_AllowExpand": 1, "F_IsPublic": 0, "F_AllowEdit": null, "F_AllowDelete": null, "F_SortCode": 1, "F_DeleteMark": 0, "F_EnabledMark": 1, "F_Description": null, "F_CreateDate": null, "F_CreateUserId": null, "F_CreateUserName": null, "F_ModifyDate": "2015-11-17 11:22:46", "F_ModifyUserId": "System", "F_ModifyUserName": "超级管理员" },
                  { "F_ModuleId": "11", "F_ParentId": "1", "F_EnCode": "OrganizeManage", "F_FullName": "业务人员管理", "F_Icon": "fa fa-sitemap", "F_UrlAddress": "unit.jsp", "F_Target": "iframe", "F_IsMenu": 1, "F_AllowExpand": 1, "F_IsPublic": 0, "F_AllowEdit": null, "F_AllowDelete": null, "F_SortCode": 1, "F_DeleteMark": 0, "F_EnabledMark": 1, "F_Description": null, "F_CreateDate": null, "F_CreateUserId": null, "F_CreateUserName": null, "F_ModifyDate": "2016-04-29 11:55:28", "F_ModifyUserId": "System", "F_ModifyUserName": "超级管理员" },
                  { "F_ModuleId": "12", "F_ParentId": "1", "F_EnCode": "OrganizeManage", "F_FullName": "审核人员管理", "F_Icon": "fa fa-sitemap", "F_UrlAddress": "person.html", "F_Target": "iframe", "F_IsMenu": 1, "F_AllowExpand": 1, "F_IsPublic": 0, "F_AllowEdit": null, "F_AllowDelete": null, "F_SortCode": 1, "F_DeleteMark": 0, "F_EnabledMark": 1, "F_Description": null, "F_CreateDate": null, "F_CreateUserId": null, "F_CreateUserName": null, "F_ModifyDate": "2016-04-29 11:55:28", "F_ModifyUserId": "System", "F_ModifyUserName": "超级管理员" },
                  { "F_ModuleId": "13", "F_ParentId": "1", "F_EnCode": "OrganizeManage", "F_FullName": "咨询人员管理", "F_Icon": "fa fa-sitemap", "F_UrlAddress": "goods.html", "F_Target": "iframe", "F_IsMenu": 1, "F_AllowExpand": 1, "F_IsPublic": 0, "F_AllowEdit": null, "F_AllowDelete": null, "F_SortCode": 1, "F_DeleteMark": 0, "F_EnabledMark": 1, "F_Description": null, "F_CreateDate": null, "F_CreateUserId": null, "F_CreateUserName": null, "F_ModifyDate": "2016-04-29 11:55:28", "F_ModifyUserId": "System", "F_ModifyUserName": "超级管理员" },
                  { "F_ModuleId": "14", "F_ParentId": "1", "F_EnCode": "OrganizeManage", "F_FullName": "业后人员管理", "F_Icon": "fa fa-sitemap", "F_UrlAddress": "carMes.html", "F_Target": "iframe", "F_IsMenu": 1, "F_AllowExpand": 1, "F_IsPublic": 0, "F_AllowEdit": null, "F_AllowDelete": null, "F_SortCode": 1, "F_DeleteMark": 0, "F_EnabledMark": 1, "F_Description": null, "F_CreateDate": null, "F_CreateUserId": null, "F_CreateUserName": null, "F_ModifyDate": "2016-04-29 11:55:28", "F_ModifyUserId": "System", "F_ModifyUserName": "超级管理员" },

                   { "F_ModuleId": "2", "F_ParentId": "0", "F_EnCode": "SysManage", "F_FullName": "危化品生产管理", "F_Icon": "fa fa-desktop", "F_UrlAddress": "/default", "F_Target": "expand", "F_IsMenu": 0, "F_AllowExpand": 1, "F_IsPublic": 0, "F_AllowEdit": null, "F_AllowDelete": null, "F_SortCode": 1, "F_DeleteMark": 0, "F_EnabledMark": 1, "F_Description": null, "F_CreateDate": null, "F_CreateUserId": null, "F_CreateUserName": null, "F_ModifyDate": "2015-11-17 11:22:46", "F_ModifyUserId": "System", "F_ModifyUserName": "超级管理员" },
                  { "F_ModuleId": "21", "F_ParentId": "2", "F_EnCode": "OrganizeManage", "F_FullName": "生产查询", "F_Icon": "fa fa-sitemap", "F_UrlAddress": "unit_analysis.html", "F_Target": "iframe", "F_IsMenu": 1, "F_AllowExpand": 1, "F_IsPublic": 0, "F_AllowEdit": null, "F_AllowDelete": null, "F_SortCode": 1, "F_DeleteMark": 0, "F_EnabledMark": 1, "F_Description": null, "F_CreateDate": null, "F_CreateUserId": null, "F_CreateUserName": null, "F_ModifyDate": "2016-04-29 11:55:28", "F_ModifyUserId": "System", "F_ModifyUserName": "超级管理员" },
                  { "F_ModuleId": "23", "F_ParentId": "2", "F_EnCode": "OrganizeManage", "F_FullName": "生产分析", "F_Icon": "fa fa-sitemap", "F_UrlAddress": "production_Analiysis.html", "F_Target": "iframe", "F_IsMenu": 1, "F_AllowExpand": 1, "F_IsPublic": 0, "F_AllowEdit": null, "F_AllowDelete": null, "F_SortCode": 1, "F_DeleteMark": 0, "F_EnabledMark": 1, "F_Description": null, "F_CreateDate": null, "F_CreateUserId": null, "F_CreateUserName": null, "F_ModifyDate": "2016-04-29 11:55:28", "F_ModifyUserId": "System", "F_ModifyUserName": "超级管理员" },

                    { "F_ModuleId": "3", "F_ParentId": "0", "F_EnCode": "SysManage", "F_FullName": "危化品销售管理", "F_Icon": "fa fa-desktop", "F_UrlAddress": "/default", "F_Target": "expand", "F_IsMenu": 0, "F_AllowExpand": 1, "F_IsPublic": 0, "F_AllowEdit": null, "F_AllowDelete": null, "F_SortCode": 1, "F_DeleteMark": 0, "F_EnabledMark": 1, "F_Description": null, "F_CreateDate": null, "F_CreateUserId": null, "F_CreateUserName": null, "F_ModifyDate": "2015-11-17 11:22:46", "F_ModifyUserId": "System", "F_ModifyUserName": "超级管理员" },
                    { "F_ModuleId": "31", "F_ParentId": "3", "F_EnCode": "OrganizeManage", "F_FullName": "销售查询", "F_Icon": "fa fa-sitemap", "F_UrlAddress": "production_Analiysis.html", "F_Target": "iframe", "F_IsMenu": 1, "F_AllowExpand": 1, "F_IsPublic": 0, "F_AllowEdit": null, "F_AllowDelete": null, "F_SortCode": 1, "F_DeleteMark": 0, "F_EnabledMark": 1, "F_Description": null, "F_CreateDate": null, "F_CreateUserId": null, "F_CreateUserName": null, "F_ModifyDate": "2016-04-29 11:55:28", "F_ModifyUserId": "System", "F_ModifyUserName": "超级管理员" },
                    { "F_ModuleId": "32", "F_ParentId": "3", "F_EnCode": "OrganizeManage", "F_FullName": "销售分析", "F_Icon": "fa fa-sitemap", "F_UrlAddress": "save_analysis.html", "F_Target": "iframe", "F_IsMenu": 1, "F_AllowExpand": 1, "F_IsPublic": 0, "F_AllowEdit": null, "F_AllowDelete": null, "F_SortCode": 1, "F_DeleteMark": 0, "F_EnabledMark": 1, "F_Description": null, "F_CreateDate": null, "F_CreateUserId": null, "F_CreateUserName": null, "F_ModifyDate": "2016-04-29 11:55:28", "F_ModifyUserId": "System", "F_ModifyUserName": "超级管理员" },


                    { "F_ModuleId": "4", "F_ParentId": "0", "F_EnCode": "SysManage", "F_FullName": "危化品存储管理", "F_Icon": "fa fa-desktop", "F_UrlAddress": "/default", "F_Target": "expand", "F_IsMenu": 0, "F_AllowExpand": 1, "F_IsPublic": 0, "F_AllowEdit": null, "F_AllowDelete": null, "F_SortCode": 1, "F_DeleteMark": 0, "F_EnabledMark": 1, "F_Description": null, "F_CreateDate": null, "F_CreateUserId": null, "F_CreateUserName": null, "F_ModifyDate": "2015-11-17 11:22:46", "F_ModifyUserId": "System", "F_ModifyUserName": "超级管理员" },
                    { "F_ModuleId": "41", "F_ParentId": "4", "F_EnCode": "OrganizeManage", "F_FullName": "存储查询", "F_Icon": "fa fa-sitemap", "F_UrlAddress": "production_Analiysis.html", "F_Target": "iframe", "F_IsMenu": 1, "F_AllowExpand": 1, "F_IsPublic": 0, "F_AllowEdit": null, "F_AllowDelete": null, "F_SortCode": 1, "F_DeleteMark": 0, "F_EnabledMark": 1, "F_Description": null, "F_CreateDate": null, "F_CreateUserId": null, "F_CreateUserName": null, "F_ModifyDate": "2016-04-29 11:55:28", "F_ModifyUserId": "System", "F_ModifyUserName": "超级管理员" },
                    { "F_ModuleId": "42", "F_ParentId": "4", "F_EnCode": "OrganizeManage", "F_FullName": "存储分析", "F_Icon": "fa fa-sitemap", "F_UrlAddress": "save_analysis.html", "F_Target": "iframe", "F_IsMenu": 1, "F_AllowExpand": 1, "F_IsPublic": 0, "F_AllowEdit": null, "F_AllowDelete": null, "F_SortCode": 1, "F_DeleteMark": 0, "F_EnabledMark": 1, "F_Description": null, "F_CreateDate": null, "F_CreateUserId": null, "F_CreateUserName": null, "F_ModifyDate": "2016-04-29 11:55:28", "F_ModifyUserId": "System", "F_ModifyUserName": "超级管理员" },

                    { "F_ModuleId": "5", "F_ParentId": "0", "F_EnCode": "SysManage", "F_FullName": "危化品运输管理", "F_Icon": "fa fa-desktop", "F_UrlAddress": "/default", "F_Target": "expand", "F_IsMenu": 0, "F_AllowExpand": 1, "F_IsPublic": 0, "F_AllowEdit": null, "F_AllowDelete": null, "F_SortCode": 1, "F_DeleteMark": 0, "F_EnabledMark": 1, "F_Description": null, "F_CreateDate": null, "F_CreateUserId": null, "F_CreateUserName": null, "F_ModifyDate": "2015-11-17 11:22:46", "F_ModifyUserId": "System", "F_ModifyUserName": "超级管理员" },
                    { "F_ModuleId": "51", "F_ParentId": "5", "F_EnCode": "OrganizeManage", "F_FullName": "过车查询", "F_Icon": "fa fa-sitemap", "F_UrlAddress": "production_Analiysis.html", "F_Target": "iframe", "F_IsMenu": 1, "F_AllowExpand": 1, "F_IsPublic": 0, "F_AllowEdit": null, "F_AllowDelete": null, "F_SortCode": 1, "F_DeleteMark": 0, "F_EnabledMark": 1, "F_Description": null, "F_CreateDate": null, "F_CreateUserId": null, "F_CreateUserName": null, "F_ModifyDate": "2016-04-29 11:55:28", "F_ModifyUserId": "System", "F_ModifyUserName": "超级管理员" },
                    { "F_ModuleId": "52", "F_ParentId": "5", "F_EnCode": "OrganizeManage", "F_FullName": "运输查询", "F_Icon": "fa fa-sitemap", "F_UrlAddress": "production_Analiysis.html", "F_Target": "iframe", "F_IsMenu": 1, "F_AllowExpand": 1, "F_IsPublic": 0, "F_AllowEdit": null, "F_AllowDelete": null, "F_SortCode": 1, "F_DeleteMark": 0, "F_EnabledMark": 1, "F_Description": null, "F_CreateDate": null, "F_CreateUserId": null, "F_CreateUserName": null, "F_ModifyDate": "2016-04-29 11:55:28", "F_ModifyUserId": "System", "F_ModifyUserName": "超级管理员" },
                    { "F_ModuleId": "53", "F_ParentId": "5", "F_EnCode": "OrganizeManage", "F_FullName": "运输分析", "F_Icon": "fa fa-sitemap", "F_UrlAddress": "car_analysis.html", "F_Target": "iframe", "F_IsMenu": 1, "F_AllowExpand": 1, "F_IsPublic": 0, "F_AllowEdit": null, "F_AllowDelete": null, "F_SortCode": 1, "F_DeleteMark": 0, "F_EnabledMark": 1, "F_Description": null, "F_CreateDate": null, "F_CreateUserId": null, "F_CreateUserName": null, "F_ModifyDate": "2016-04-29 11:55:28", "F_ModifyUserId": "System", "F_ModifyUserName": "超级管理员" },

                    { "F_ModuleId": "6", "F_ParentId": "0", "F_EnCode": "SysManage", "F_FullName": "危化品使用管理", "F_Icon": "fa fa-desktop", "F_UrlAddress": "/default", "F_Target": "expand", "F_IsMenu": 0, "F_AllowExpand": 1, "F_IsPublic": 0, "F_AllowEdit": null, "F_AllowDelete": null, "F_SortCode": 1, "F_DeleteMark": 0, "F_EnabledMark": 1, "F_Description": null, "F_CreateDate": null, "F_CreateUserId": null, "F_CreateUserName": null, "F_ModifyDate": "2015-11-17 11:22:46", "F_ModifyUserId": "System", "F_ModifyUserName": "超级管理员" },
                    { "F_ModuleId": "61", "F_ParentId": "6", "F_EnCode": "OrganizeManage", "F_FullName": "使用查询", "F_Icon": "fa fa-sitemap", "F_UrlAddress": "production_Analiysis.html", "F_Target": "iframe", "F_IsMenu": 1, "F_AllowExpand": 1, "F_IsPublic": 0, "F_AllowEdit": null, "F_AllowDelete": null, "F_SortCode": 1, "F_DeleteMark": 0, "F_EnabledMark": 1, "F_Description": null, "F_CreateDate": null, "F_CreateUserId": null, "F_CreateUserName": null, "F_ModifyDate": "2016-04-29 11:55:28", "F_ModifyUserId": "System", "F_ModifyUserName": "超级管理员" },
                    { "F_ModuleId": "62", "F_ParentId": "6", "F_EnCode": "OrganizeManage", "F_FullName": "使用分析", "F_Icon": "fa fa-sitemap", "F_UrlAddress": "use_analysis.html", "F_Target": "iframe", "F_IsMenu": 1, "F_AllowExpand": 1, "F_IsPublic": 0, "F_AllowEdit": null, "F_AllowDelete": null, "F_SortCode": 1, "F_DeleteMark": 0, "F_EnabledMark": 1, "F_Description": null, "F_CreateDate": null, "F_CreateUserId": null, "F_CreateUserName": null, "F_ModifyDate": "2016-04-29 11:55:28", "F_ModifyUserId": "System", "F_ModifyUserName": "超级管理员" },

                    { "F_ModuleId": "7", "F_ParentId": "0", "F_EnCode": "SysManage", "F_FullName": "危化品事故管理", "F_Icon": "fa fa-desktop", "F_UrlAddress": "/default", "F_Target": "expand", "F_IsMenu": 0, "F_AllowExpand": 1, "F_IsPublic": 0, "F_AllowEdit": null, "F_AllowDelete": null, "F_SortCode": 1, "F_DeleteMark": 0, "F_EnabledMark": 1, "F_Description": null, "F_CreateDate": null, "F_CreateUserId": null, "F_CreateUserName": null, "F_ModifyDate": "2015-11-17 11:22:46", "F_ModifyUserId": "System", "F_ModifyUserName": "超级管理员" },
                    { "F_ModuleId": "71", "F_ParentId": "7", "F_EnCode": "OrganizeManage", "F_FullName": "事故查询", "F_Icon": "fa fa-sitemap", "F_UrlAddress": "storyList.html", "F_Target": "iframe", "F_IsMenu": 1, "F_AllowExpand": 1, "F_IsPublic": 0, "F_AllowEdit": null, "F_AllowDelete": null, "F_SortCode": 1, "F_DeleteMark": 0, "F_EnabledMark": 1, "F_Description": null, "F_CreateDate": null, "F_CreateUserId": null, "F_CreateUserName": null, "F_ModifyDate": "2016-04-29 11:55:28", "F_ModifyUserId": "System", "F_ModifyUserName": "超级管理员" },
                    { "F_ModuleId": "72", "F_ParentId": "7", "F_EnCode": "OrganizeManage", "F_FullName": "事故分析", "F_Icon": "fa fa-sitemap", "F_UrlAddress": "accidentAnalysis.html", "F_Target": "iframe", "F_IsMenu": 1, "F_AllowExpand": 1, "F_IsPublic": 0, "F_AllowEdit": null, "F_AllowDelete": null, "F_SortCode": 1, "F_DeleteMark": 0, "F_EnabledMark": 1, "F_Description": null, "F_CreateDate": null, "F_CreateUserId": null, "F_CreateUserName": null, "F_ModifyDate": "2016-04-29 11:55:28", "F_ModifyUserId": "System", "F_ModifyUserName": "超级管理员" },


                    { "F_ModuleId": "8", "F_ParentId": "0", "F_EnCode": "SysManage", "F_FullName": "危化品预警管理", "F_Icon": "fa fa-desktop", "F_UrlAddress": "/default", "F_Target": "expand", "F_IsMenu": 0, "F_AllowExpand": 1, "F_IsPublic": 0, "F_AllowEdit": null, "F_AllowDelete": null, "F_SortCode": 1, "F_DeleteMark": 0, "F_EnabledMark": 1, "F_Description": null, "F_CreateDate": null, "F_CreateUserId": null, "F_CreateUserName": null, "F_ModifyDate": "2015-11-17 11:22:46", "F_ModifyUserId": "System", "F_ModifyUserName": "超级管理员" },
                    { "F_ModuleId": "81", "F_ParentId": "8", "F_EnCode": "OrganizeManage", "F_FullName": "预警管理", "F_Icon": "fa fa-sitemap", "F_UrlAddress": "alam.html", "F_Target": "iframe", "F_IsMenu": 1, "F_AllowExpand": 1, "F_IsPublic": 0, "F_AllowEdit": null, "F_AllowDelete": null, "F_SortCode": 1, "F_DeleteMark": 0, "F_EnabledMark": 1, "F_Description": null, "F_CreateDate": null, "F_CreateUserId": null, "F_CreateUserName": null, "F_ModifyDate": "2016-04-29 11:55:28", "F_ModifyUserId": "System", "F_ModifyUserName": "超级管理员" },
                    { "F_ModuleId": "82", "F_ParentId": "8", "F_EnCode": "OrganizeManage", "F_FullName": "消息管理", "F_Icon": "fa fa-sitemap", "F_UrlAddress": "notice.html", "F_Target": "iframe", "F_IsMenu": 1, "F_AllowExpand": 1, "F_IsPublic": 0, "F_AllowEdit": null, "F_AllowDelete": null, "F_SortCode": 1, "F_DeleteMark": 0, "F_EnabledMark": 1, "F_Description": null, "F_CreateDate": null, "F_CreateUserId": null, "F_CreateUserName": null, "F_ModifyDate": "2016-04-29 11:55:28", "F_ModifyUserId": "System", "F_ModifyUserName": "超级管理员" },

                    { "F_ModuleId": "9", "F_ParentId": "0", "F_EnCode": "SysManage", "F_FullName": "危化品问题管理", "F_Icon": "fa fa-desktop", "F_UrlAddress": "/default", "F_Target": "expand", "F_IsMenu": 0, "F_AllowExpand": 1, "F_IsPublic": 0, "F_AllowEdit": null, "F_AllowDelete": null, "F_SortCode": 1, "F_DeleteMark": 0, "F_EnabledMark": 1, "F_Description": null, "F_CreateDate": null, "F_CreateUserId": null, "F_CreateUserName": null, "F_ModifyDate": "2015-11-17 11:22:46", "F_ModifyUserId": "System", "F_ModifyUserName": "超级管理员" },
                    { "F_ModuleId": "91", "F_ParentId": "9", "F_EnCode": "OrganizeManage", "F_FullName": "安全问题登记", "F_Icon": "fa fa-sitemap", "F_UrlAddress": "safePromblem.html", "F_Target": "iframe", "F_IsMenu": 1, "F_AllowExpand": 1, "F_IsPublic": 0, "F_AllowEdit": null, "F_AllowDelete": null, "F_SortCode": 1, "F_DeleteMark": 0, "F_EnabledMark": 1, "F_Description": null, "F_CreateDate": null, "F_CreateUserId": null, "F_CreateUserName": null, "F_ModifyDate": "2016-04-29 11:55:28", "F_ModifyUserId": "System", "F_ModifyUserName": "超级管理员" },
                    { "F_ModuleId": "92", "F_ParentId": "9", "F_EnCode": "OrganizeManage", "F_FullName": "安全处理", "F_Icon": "fa fa-sitemap", "F_UrlAddress": "safeHandle.html", "F_Target": "iframe", "F_IsMenu": 1, "F_AllowExpand": 1, "F_IsPublic": 0, "F_AllowEdit": null, "F_AllowDelete": null, "F_SortCode": 1, "F_DeleteMark": 0, "F_EnabledMark": 1, "F_Description": null, "F_CreateDate": null, "F_CreateUserId": null, "F_CreateUserName": null, "F_ModifyDate": "2016-04-29 11:55:28", "F_ModifyUserId": "System", "F_ModifyUserName": "超级管理员" },

                    { "F_ModuleId": "10", "F_ParentId": "0", "F_EnCode": "SysManage", "F_FullName": "数据交换管理", "F_Icon": "fa fa-desktop", "F_UrlAddress": "/default", "F_Target": "expand", "F_IsMenu": 0, "F_AllowExpand": 1, "F_IsPublic": 0, "F_AllowEdit": null, "F_AllowDelete": null, "F_SortCode": 1, "F_DeleteMark": 0, "F_EnabledMark": 1, "F_Description": null, "F_CreateDate": null, "F_CreateUserId": null, "F_CreateUserName": null, "F_ModifyDate": "2015-11-17 11:22:46", "F_ModifyUserId": "System", "F_ModifyUserName": "超级管理员" },
                    { "F_ModuleId": "101", "F_ParentId": "10", "F_EnCode": "OrganizeManage", "F_FullName": "服务访问记录日志", "F_Icon": "fa fa-sitemap", "F_UrlAddress": "dataExchange.html", "F_Target": "iframe", "F_IsMenu": 1, "F_AllowExpand": 1, "F_IsPublic": 0, "F_AllowEdit": null, "F_AllowDelete": null, "F_SortCode": 1, "F_DeleteMark": 0, "F_EnabledMark": 1, "F_Description": null, "F_CreateDate": null, "F_CreateUserId": null, "F_CreateUserName": null, "F_ModifyDate": "2016-04-29 11:55:28", "F_ModifyUserId": "System", "F_ModifyUserName": "超级管理员" },

                    { "F_ModuleId": "160", "F_ParentId": "0", "F_EnCode": "SysManage", "F_FullName": "数据源管理", "F_Icon": "fa fa-desktop", "F_UrlAddress": "/default", "F_Target": "expand", "F_IsMenu": 0, "F_AllowExpand": 1, "F_IsPublic": 0, "F_AllowEdit": null, "F_AllowDelete": null, "F_SortCode": 1, "F_DeleteMark": 0, "F_EnabledMark": 1, "F_Description": null, "F_CreateDate": null, "F_CreateUserId": null, "F_CreateUserName": null, "F_ModifyDate": "2015-11-17 11:22:46", "F_ModifyUserId": "System", "F_ModifyUserName": "超级管理员" },
                    { "F_ModuleId": "161", "F_ParentId": "160", "F_EnCode": "OrganizeManage", "F_FullName": "数据源管理", "F_Icon": "fa fa-sitemap", "F_UrlAddress": "dataSource.html", "F_Target": "iframe", "F_IsMenu": 1, "F_AllowExpand": 1, "F_IsPublic": 0, "F_AllowEdit": null, "F_AllowDelete": null, "F_SortCode": 1, "F_DeleteMark": 0, "F_EnabledMark": 1, "F_Description": null, "F_CreateDate": null, "F_CreateUserId": null, "F_CreateUserName": null, "F_ModifyDate": "2016-04-29 11:55:28", "F_ModifyUserId": "System", "F_ModifyUserName": "超级管理员" },


                    { "F_ModuleId": "170", "F_ParentId": "0", "F_EnCode": "SysManage", "F_FullName": "系统管理", "F_Icon": "fa fa-desktop", "F_UrlAddress": "/default", "F_Target": "expand", "F_IsMenu": 0, "F_AllowExpand": 1, "F_IsPublic": 0, "F_AllowEdit": null, "F_AllowDelete": null, "F_SortCode": 1, "F_DeleteMark": 0, "F_EnabledMark": 1, "F_Description": null, "F_CreateDate": null, "F_CreateUserId": null, "F_CreateUserName": null, "F_ModifyDate": "2015-11-17 11:22:46", "F_ModifyUserId": "System", "F_ModifyUserName": "超级管理员" },
                    { "F_ModuleId": "171", "F_ParentId": "170", "F_EnCode": "OrganizeManage", "F_FullName": "角色管理", "F_Icon": "fa fa-sitemap", "F_UrlAddress": "role.html", "F_Target": "iframe", "F_IsMenu": 1, "F_AllowExpand": 1, "F_IsPublic": 0, "F_AllowEdit": null, "F_AllowDelete": null, "F_SortCode": 1, "F_DeleteMark": 0, "F_EnabledMark": 1, "F_Description": null, "F_CreateDate": null, "F_CreateUserId": null, "F_CreateUserName": null, "F_ModifyDate": "2016-04-29 11:55:28", "F_ModifyUserId": "System", "F_ModifyUserName": "超级管理员" },
                    { "F_ModuleId": "172", "F_ParentId": "170", "F_EnCode": "OrganizeManage", "F_FullName": "用户管理", "F_Icon": "fa fa-sitemap", "F_UrlAddress": "user1.html", "F_Target": "iframe", "F_IsMenu": 1, "F_AllowExpand": 1, "F_IsPublic": 0, "F_AllowEdit": null, "F_AllowDelete": null, "F_SortCode": 1, "F_DeleteMark": 0, "F_EnabledMark": 1, "F_Description": null, "F_CreateDate": null, "F_CreateUserId": null, "F_CreateUserName": null, "F_ModifyDate": "2016-04-29 11:55:28", "F_ModifyUserId": "System", "F_ModifyUserName": "超级管理员" },
                    { "F_ModuleId": "172", "F_ParentId": "170", "F_EnCode": "OrganizeManage", "F_FullName": "区域管理", "F_Icon": "fa fa-sitemap", "F_UrlAddress": "department1.html", "F_Target": "iframe", "F_IsMenu": 1, "F_AllowExpand": 1, "F_IsPublic": 0, "F_AllowEdit": null, "F_AllowDelete": null, "F_SortCode": 1, "F_DeleteMark": 0, "F_EnabledMark": 1, "F_Description": null, "F_CreateDate": null, "F_CreateUserId": null, "F_CreateUserName": null, "F_ModifyDate": "2016-04-29 11:55:28", "F_ModifyUserId": "System", "F_ModifyUserName": "超级管理员" },
                    { "F_ModuleId": "173", "F_ParentId": "170", "F_EnCode": "OrganizeManage", "F_FullName": "日志管理", "F_Icon": "fa fa-sitemap", "F_UrlAddress": "log.html", "F_Target": "iframe", "F_IsMenu": 1, "F_AllowExpand": 1, "F_IsPublic": 0, "F_AllowEdit": null, "F_AllowDelete": null, "F_SortCode": 1, "F_DeleteMark": 0, "F_EnabledMark": 1, "F_Description": null, "F_CreateDate": null, "F_CreateUserId": null, "F_CreateUserName": null, "F_ModifyDate": "2016-04-29 11:55:28", "F_ModifyUserId": "System", "F_ModifyUserName": "超级管理员" },

                    { "F_ModuleId": "180", "F_ParentId": "0", "F_EnCode": "SysManage", "F_FullName": "消息推送管理", "F_Icon": "fa fa-desktop", "F_UrlAddress": "/default", "F_Target": "expand", "F_IsMenu": 0, "F_AllowExpand": 1, "F_IsPublic": 0, "F_AllowEdit": null, "F_AllowDelete": null, "F_SortCode": 1, "F_DeleteMark": 0, "F_EnabledMark": 1, "F_Description": null, "F_CreateDate": null, "F_CreateUserId": null, "F_CreateUserName": null, "F_ModifyDate": "2015-11-17 11:22:46", "F_ModifyUserId": "System", "F_ModifyUserName": "超级管理员" },
                    { "F_ModuleId": "181", "F_ParentId": "180", "F_EnCode": "OrganizeManage", "F_FullName": "推送人列表管理", "F_Icon": "fa fa-sitemap", "F_UrlAddress": "pushMan.html", "F_Target": "iframe", "F_IsMenu": 1, "F_AllowExpand": 1, "F_IsPublic": 0, "F_AllowEdit": null, "F_AllowDelete": null, "F_SortCode": 1, "F_DeleteMark": 0, "F_EnabledMark": 1, "F_Description": null, "F_CreateDate": null, "F_CreateUserId": null, "F_CreateUserName": null, "F_ModifyDate": "2016-04-29 11:55:28", "F_ModifyUserId": "System", "F_ModifyUserName": "超级管理员" },
                    { "F_ModuleId": "182", "F_ParentId": "180", "F_EnCode": "OrganizeManage", "F_FullName": "消息管理", "F_Icon": "fa fa-sitemap", "F_UrlAddress": "news01.html", "F_Target": "iframe", "F_IsMenu": 1, "F_AllowExpand": 1, "F_IsPublic": 0, "F_AllowEdit": null, "F_AllowDelete": null, "F_SortCode": 1, "F_DeleteMark": 0, "F_EnabledMark": 1, "F_Description": null, "F_CreateDate": null, "F_CreateUserId": null, "F_CreateUserName": null, "F_ModifyDate": "2016-04-29 11:55:28", "F_ModifyUserId": "System", "F_ModifyUserName": "超级管理员" },

                ];
            }
            var _html = "";
            $.each(data, function (i) {
                var row = data[i];
                if (row.F_ParentId == "0") {
                    if (i == 0) {
                        _html += '<li class="treeview active">';
                    } else {
                        _html += '<li class="treeview">';
                    }
                    _html += '<a href="#">'
                    _html += '<i class="' + row.F_Icon + '"></i><span>' + row.F_FullName + '</span><i class="fa fa-angle-left pull-right"></i>'
                    _html += '</a>'
                    var childNodes = $.learunindex.jsonWhere(data, function (v) { return v.F_ParentId == row.F_ModuleId });
                    if (childNodes.length > 0) {
                        _html += '<ul class="treeview-menu">';
                        $.each(childNodes, function (i) {
                            var subrow = childNodes[i];
                            var subchildNodes = $.learunindex.jsonWhere(data, function (v) { return v.F_ParentId == subrow.F_ModuleId });
                            _html += '<li>';
                            if (subchildNodes.length > 0) {
                                _html += '<a href="#"><i class="' + subrow.F_Icon + '"></i>' + subrow.F_FullName + '';
                                _html += '<i class="fa fa-angle-left pull-right"></i></a>';
                                _html += '<ul class="treeview-menu">';
                                $.each(subchildNodes, function (i) {
                                    var subchildNodesrow = subchildNodes[i];
                                    _html += '<li><a class="menuItem" data-id="' + subrow.F_ModuleId + '" href="'+ subrow.F_UrlAddress + '"><i class="' + subchildNodesrow.F_Icon + '"></i>' + subchildNodesrow.F_FullName + '</a></li>';
                                });
                                _html += '</ul>';

                            } else {
                                _html += '<a class="menuItem" data-id="' + subrow.F_ModuleId + '" href="' + subrow.F_UrlAddress + '"><i class="' + subrow.F_Icon + '"></i>' + subrow.F_FullName + '</a>';
                            }
                            _html += '</li>';
                        });
                        _html += '</ul>';
                    }
                    _html += '</li>'
                }
            });
            $("#sidebar-menu").append(_html);
            $("#sidebar-menu li a").click(function () {
                var d = $(this), e = d.next();
                if (e.is(".treeview-menu") && e.is(":visible")) {
                    e.slideUp(500, function () {
                        e.removeClass("menu-open")
                    });
                    e.parent("li").removeClass("active")
                } else if (e.is(".treeview-menu") && !e.is(":visible")) {
                    var f = d.parents("ul").first(),
                    g = f.find("ul:visible").slideUp(500);
                    g.removeClass("menu-open");
                    var h = d.parent("li");
                    e.slideDown(500, function () {
                        e.addClass("menu-open"),
                        f.find("li.active").removeClass("active")
                        h.addClass("active");

                        var _height1 = $(window).height() - $("#sidebar-menu >li.active").position().top - 41;
                        var _height2 = $("#sidebar-menu li > ul.menu-open").height() + 10
                        if (_height2 > _height1) {
                            $("#sidebar-menu >li > ul.menu-open").css({
                                overflow: "auto",
                                height: _height1
                            })
                        }
                    })
                }
                e.is(".treeview-menu");
            });
        }
    };
    $(function () {
        var url = window.location.href;
        var urlNum = url.split("9")[1];
        if(urlNum == 0){
            $("#myFrame").attr("src","home1.html")
        }else if(urlNum == 1){
            $("#myFrame").attr("src","home2.html")        }
        else if(urlNum == 2){
            $("#myFrame").attr("src","home3.html")        }
        else if(urlNum == 3){
            $("#myFrame").attr("src", "home4.html")
        }
        else if (urlNum ==4) {
            $("#myFrame").attr("src", "home.html")
        }
        $.learunindex.load();
        $.learunindex.loadMenu(urlNum);
        $.learuntab.init();
    });

})(jQuery);