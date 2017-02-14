var b_sv = location.hostname;
function onClicked(c, a, f) {
    $(document).on('click', c, function() {
        document.title = a, init.page(f)
    })
}
location.hostname == b_sv && (noti = {
    main: function() {
        toastr.options = {
            closeButton: !0,
            debug: !1,
            progressBar: !0,
            positionClass: 'toast-top-right',
            onclick: null,
            showDuration: '400',
            hideDuration: '1000',
            timeOut: '8000',
            extendedTimeOut: '1500',
            showEasing: 'swing',
            hideEasing: 'linear',
            showMethod: 'fadeIn',
            hideMethod: 'fadeOut'
        }
    },
    clear: function() {
        toastr.clear()
    },
    success: function(c) {
        return this.clear(), toastr.success(c)
    },
    info: function(c) {
        return this.clear(), toastr.info(c)
    },
    warning: function(c) {
        return this.clear(), toastr.warning(c)
    },
    error: function(c) {
        return this.clear(), toastr.error(c)
    }
}, init = {
    getBW: function(c, a, f) {
        var q = c.split(a);
        return q[1] ? (q = q[1].split(f), q[0]) : 0
    },
    addZero: function(c) {
        return 10 > c && (c = '0' + c), c
    },
    replace_JSON: function(c) {
        return JSON.parse(c.toString())
    },
    validate_RegEx: function(c) {
        return c.replace(/(\\|\.|\[|\]|\{|\}|\(|\)|\*|\+|\?|\^|\$|\|)/g, '\\$1')
    },
    randomString: function(c) {
        for (var a = 'abcdefghijklmnoprstuvyzxABCDEFGHIJKLMNOPRSTUVYZX0123456789', f = '', q = 0; c > q; q++) {
            f += a[init.randomInt(a.length)]
        };
        return f
    },
    randomNumber: function(c) {
        for (var a = '0123456789', f = '', q = 0; c > q; q++) {
            f += a[init.randomInt(a.length)]
        };
        return f
    },
    randomText: function(c) {
        for (var a = 'abcdefghijklmnoprstuvyzxABCDEFGHIJKLMNOPRSTUVYZX', f = '', q = 0; c > q; q++) {
            f += a[init.randomInt(a.length)]
        };
        return f
    },
    spinText: function(c) {
        var a = c.match(/{([^{}]*)}/g);
        if (!a) {
            return c
        };
        for (i in a) {
            spin = a[i], ori_spin = spin, spin = spin.replace('{', '').replace('}', ''), spin_strs = spin.split('|'), c = c.replace(ori_spin, spin_strs[init.randomInt(spin_strs.length)])
        };
        return init.spinText(c)
    },
    number_format: function(c, a, f, q) {
        c = (c + '').replace(/[^0-9+\-Ee.]/g, '');
        var g = isFinite(+c) ? +c : 0,
            j = isFinite(+a) ? Math.abs(a) : 0,
            l = 'undefined' == typeof q ? ',' : q,
            h = 'undefined' == typeof f ? '.' : f,
            b = '',
            m = function(c, a) {
                var f = Math.pow(10, a);
                return '' + (Math.round(c * f) / f).toFixed(a)
            };
        return b = (j ? m(g, j) : '' + Math.round(g)).split('.'), b[0].length > 3 && (b[0] = b[0].replace(/\B(?=(?:\d{3})+(?!\d))/g, l)), (b[1] || '').length < j && (b[1] = b[1] || '', b[1] += new Array(j - b[1].length + 1).join('0')), b.join(h)
    },
    toJSON: function(c) {
        var a = new Object;
        return a.gid = c.gid, a.gname = c.gname, a.members = c.members, a
    },
    randomInt: function(c) {
        return Math.floor(Math.random() * c)
    },
    timeNow: function() {
        var c = new Date,
            a = init.addZero(c.getDate()),
            f = init.addZero(c.getMonth() + 1),
            q = init.addZero(c.getFullYear()),
            g = init.addZero(c.getHours()),
            j = init.addZero(c.getMinutes()),
            l = init.addZero(c.getSeconds());
        return a + '/' + f + '/' + q + ' - ' + g + ':' + j + ':' + l
    },
    formatTime: function(c) {
        var a = new Date(1e3 * c),
            f = Math.floor((a - new Date(0)) / 864e5),
            q = a.getUTCHours() + 24 * f,
            g = a.getUTCMinutes(),
            j = a.getSeconds();
        return 10 > q && (q = '0' + q), 10 > g && (g = '0' + g), 10 > j && (j = '0' + j), q + ':' + g + ':' + j
    },
    page: function(c) {
       /* $('.loader-circle').show(), $.get('//' + b_sv + '/tools/html/' + c + '.html', {
            now: $.now()
        }, function(a) {
            $('#bachdeptrai').hide().html(a).fadeIn('fast'), 'undefined' == typeof _ljs[c] ? (bload(c, function() {
                $('.loader-circle').fadeOut('fast')
            }), _ljs[c] = 1) : $('.loader-circle').fadeOut('fast')
        })*/
    },
    dataTables: function() {
        $('.editable').dataTable({
            responsive: !0,
            dom: 'T<\"clear\">lfrtip',
            bLengthChange: !1,
            bInfo: !1,
            bPaginate: !1,
            language: {
                sSearch: 'Từ kh༺: ',
                sZeroRecords: 'Không có kết quả phù hợp'
            },
            tableTools: {
                sSwfPath: '/files/swf/dataTables.swf'
            }
        })
    },
    count_members_GR: function(c, a, f, q) {
        $.get('https://graph.facebook.com/' + c, {
            fields: 'members.limit(1).summary(true)',
            access_token: f
        }).done(function(c) {
            $(a).text(init.number_format(c.members.summary.total_count)), q()
        })
    }
}, $.fn.extend({
    disabled: function() {
        return this.attr('disabled', 'disabled').addClass('disabled')
    },
    undisabled: function() {
        return this.removeAttr('disabled').removeClass('disabled')
    },
    buttonLoad: function() {
        return this.addClass('m-progress').disabled()
    },
    buttonStop: function() {
        return this.removeClass('m-progress').undisabled()
    },
    validate: function() {
        return '' == $.trim(this.val()) ? (noti.error('Vui lòng điền đầy đủ nội dung !'), !1) : $.trim(this.val())
    },
    isNumber: function() {
        return $.isNumeric(this.validate()) ? parseInt($.trim(this.validate())) : (noti.error('Vui lòng nhập đúng định dạng dữ liệu !'), !1)
    },
    thisSelect: function() {
        return this.click(function() {
            this.select()
        })
    },
    onEnter: function(c) {
        this.keypress(function(a) {
            13 == a.which && c()
        })
    }
}), run = {
    main: function() {
        noti.main(), $('.loader-circle').fadeOut('fast'),this.ClickAUTO()
    },
    loading: function() {
        return '<img src=\"//i.imgur.com/63EDGlY.gif\" />'
    },
    confirm: function() {
        return '<img src=\"//i.imgur.com/wwAuTRn.gif\" />'
    },
    checkpoint: function() {
        return '<img src=\"//i.imgur.com/cBQ5zxZ.png\" />'
    },
    success: function() {
        return '<img src=\"//i.imgur.com/dwMSftC.png\" />'
    },
    error: function() {
        return '<img src=\"//i.imgur.com/0MxbOaq.png\" />'
    },
    ClickAUTO: function() {
        $(document).on('click', '#auto_PostLink', function() {
            noti.error('Tính năng này hiện chưa khả dụng !')
        }), $(document).on('click', '#auto_PostImage', function() {
            noti.error('Tính năng này hiện chưa khả dụng !')
        }), onClicked('#auto_Share', 'AUTO Share Posts', 'auto_share'), onClicked('#auto_Tagfrfemale', 'AUTO Share Tags Friends - FEMALE', 'auto_Tagfrfemale'), onClicked('#auto_Tagfrmale', 'AUTO Share Tags Friends - MALE', 'auto_Tagfrmale'), onClicked('#auto_Sharegrb', 'AUTO Share Group - API feed', 'auto_sharegrb'), onClicked('#auto_Cmtnf', 'AUTO Comment Newsfeed', 'auto_cmtnf'), onClicked('#auto_Sharet', 'AUTO Thành Đẹp Trai', 'auto_sharet'), onClicked('#auto_Group', 'AUTO Posts Group', 'auto_group'), onClicked('#auto_Wall', 'AUTO Posts Wall', 'auto_wall'), onClicked('#auto_Like', 'AUTO Like', 'auto_like'), onClicked('#auto_Comment', 'AUTO Comment', 'auto_comment'), onClicked('#auto_AddFriend', 'AUTO Add Friends', 'auto_addfriends'), onClicked('#auto_Follow', 'AUTO Theo dõi', 'auto_follow'), onClicked('#auto_UpComment', 'AUTO Uptop bài viết', 'auto_uptop'), onClicked('#auto_InvitedEvent', 'Mời bạn bè tham gia sự kiện', 'auto_invitedevent')
    },
}, timeout_array = [], timer = {
    count_down: function(c, a, f, q, g) {
        return -1 === f && (a--, f = 59), -1 === a && (c--, a = 59), -1 == c ? (clearTimeout(timeout), g(), !1) : ($('#' + q).text(init.addZero(c) + ':' + init.addZero(a) + ':' + init.addZero(f)), void((timeout = setTimeout(function() {
            f--, timer.count_down(c, a, f, q, g)
        }, 1e3))))
    },
    count_down_array: function(c, a, f, q, g, j) {
        return -1 === f && (a--, f = 59), -1 === a && (c--, a = 59), -1 == c ? (clearTimeout(timeout_array[g]), j(), !1) : ($('#' + q).text(init.addZero(c) + ':' + init.addZero(a) + ':' + init.addZero(f)), void((timeout_array[g] = setTimeout(function() {
            f--, timer.count_down_array(c, a, f, q, g, j)
        }, 1e3))))
    }
}, run.main())