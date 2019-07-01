import { Message } from 'element-ui';

let errCollect = {
    ModelMessage: {
        editMessageTask: {
            3001: '标题为空',
            3002: '请选择消息模板或触发器',
            3003: '请选择任务类型',
            3004: '该短信模板未启用或者不存在',
            3005: '该触发器未启用或者不存在',
            3006: '该消息任务不存在',
            3007: '启用中无法修改',
            3008: '存在已启用的同类模板任务',
        },
        editMessageTemplate: {
            3001: '标题为空',
            3002: '请选择发送类型',
            3003: '内容模板不能为空',
            3004: '结束时间不能小于开始时间',
            3005: '启用中无法修改'
        },
        editTrigger: {
            3001: '状态码为空',
            3002: 'id格式错误',
            3003: '启用中无法修改',
            3004: '结束时间要大于开始时间15分钟'
        },
        auditMessageTask: {
            3001: '状态参数错误',
            3002: '参数错误',
            3003: '已经是该状态',
            3004: '短信模板未启或者不存在',
            3005: '触发其未启用或者不存在',
            3008: '存在已启用的同类模板任务'
        },
        auditMessageTemplate: {
            3001: '状态参数错误',
            3002: '参数错误',
            3003: '已经是该状态',
            3004: '存在已启用的消息任务，无法停用'
        },
        auditTrigger: {
            3001: '状态码为空',
            3002: '格式错误',
            3003: '该状态正在使用中',
            3004: '存在已启用的消息任务，无法停用'
        },
        getMessageTemplateText: {},
        saveMessageTask: {
            3001: '状态码为空',
            3002: '请选择消息模板或触发器',
            3003: '请选择任务类型',
            3004: '该短信模板未启用或者不存在',
            3005: '该触发器未启用或者不存在',
            3006: '存在已启用的同类模板任务'
        },
        saveMessageTemplate: {
            3001: '标题不能为空',
            3002: '请选择发送类型',
            3003: '内容模板不能为空',
            3004: '结束时间不能小于开始时间',
            3005: '启用中无法修改'
        },
        addTrigger: {
            3001: '标题不能为空',
            3002: '时间格式错误',
            3003: '结束时间要大于开始时间15分钟'
        },
        getMessageTask: {
            3001: '状态必须为数字',
            3002: '错误的审核类型'
        },
        getMessageTemplate: {
            3001: '状态必须为数字',
            3002: '错误的审核类型'
        },
        getTrigger: {
            3001: '状态必须为数字',
            3002: '错误的审核类型'
        }
    },
    OfflineActivities: {
        verifyWinners: {},
        getWinning: {
            3001: '未查询到获奖记录',
            3002: '该商品已领取'
        },
        updateOfflineActivities: {
            3001: '标题为空',
            3002: '时间格式错误',
            3003: '结束时间不能小于开始时间',
            3004: '图片没有上传过'
        },
        updateOfflineActivitiesGoods: {
            3001: '该活动已过期',
            3002: '商品已下架或者不存在',
            3003: '参数错误'
        },
        getWinnerList: {
            3001: '中奖纪录错误'
        },
        addOfflineActivities: {
            3001: '标题为空',
            3002: '时间格式错误',
            3003: '结束时间不能小于开始时间',
            3004: '未接收到图片上传信息'
        },
        addOfflineActivitiesGoods: {
            3001: '该活动已过期',
            3002: '商品已下架或者不存在'
        },
        getQrcode: {
            3001: 'con_id长度只能是28位',
            3002: '缺少参数page',
            3003: 'scene不能为空',
            3004: '获取access_token失败',
            3005: '未获取到access_token',
            3006: '生成二维码识别',
            3007: 'scene最大长度32',
            3008: 'page不能为空',
            3009: '微信错误',
            30011: '上传失败',
            30012: '该会员不存在',
        },
        getOfflineActivities: {
            3001: '手机号格式错误',
            3002: '页码和查询条数只能是数字'
        },
        getOfflineActivitiesGoods: {
            3001: '手机号格式错误',
            3002: '页码和查询条数只能是数字'
        },
        resetOfflineActivitiesQrcode: {
            3001: 'con_id长度只能是28位',
            3002: '缺少参数page',
            3003: 'scene不能为空',
            3004: '获取access_token失败',
            3005: '未获取到access_token',
            3006: '生成二维码识别',
            3007: 'scene最大长度32',
            3008: 'page不能为空',
            3009: '微信错误',
            30011: '上传失败',
            30012: '该会员不存在',
        },
    },
    Order: {
        updateDeliverOrderGoods: {
            3001: '快递和快递单号不能为空',
            3002: '请输入正确的快递公司编码',
            3003: '订单商品不存在',
            3004: '非待发货订单无法发货或已发货订单无法变更',
            3005: '请先发货',
            3007: '不同用户订单不能使用同一物流公司物流单号发货'
        },
        getMemberOrders: {},
        getOrders: {
            3002: '页码和查询条数只能是数字',
            3003: '无效的状态查询'
        },
        getOrderInfo: {
            3002: '订单ID只能是数字',
            3003: '请选择任务类型'
        },
        deliverOrderGoods: {
            3001: '快递和快递单号不能为空',
            3002: '请输入正确的快递公司编码',
            3003: '订单商品不存在',
            3004: '非待发货订单无法发货或已发货订单无法变更',
            3005: '请先发货',
            3007: '不同用户订单不能使用同一物流公司物流单号发货'
        },
        getExpressList: {}
    },
    Recommend: {
        updateRecommend: {
            3001: 'model_id和id只能是数字',
            3002: '无效的模块',
            3003: '信息不完整',
            3004: '请上传图片',
            3005: '未设置显示星期',
            3006: '请设置展示商品',
            3007: '未获取到数据',
            3008: '非法参数',
            3010: '图片没有上传过',
            3011: '修改失败'
        },
        delRecommend: {
            3002: '请先删除下级推荐'
        },
        resetRecommend: {},
        addRecommend: {
            3001: 'model_id和id只能是数字',
            3002: '无效的模块',
            3003: '信息不完整',
            3004: '请上传图片',
            3005: '未设置显示星期',
            3006: '请设置展示商品',
            3007: '未获取到数据',
            3008: '非法参数',
            3009: '超出添加数量',
            3010: '图片没有上传过',
            3011: '修改失败',
            3012: '不存在的关联上级内容',
            3013: '添加内容模板ID与父级模板ID不一致',
        },
        getRecommendId: {
            3001: 'model_id和tier只能是数字'
        },
        getRecommend: {},
        getRecommendInfo: {
            3001: 'id只能是数字'
        }
    },
    Rights: {
        getDiamondvipNetPush: {
            3001: '获取出错'
        },
        creatBossShareDiamondvip: {
            3001: '手机号格式错误',
            3002: '数字传值有误3002',
            3005: '超出金额设置范围'
        },
        auditDiamondvipBounty: {
            3001: '数字传值有误3001',
            3002: '该记录不存在',
            3003: '传入状态错误',
            3004: '错误的申请状态',
            3005: '已审核的无法再次进行相同的审核结果',
            3006: '审核失败',
            3007: '没有操作权限',
            3008: '当前审核时间不正确',
        },
        passBossShareDiamondvip: {
            3001: '数字传值有误3001'
        },
        auditManagerShopApply: {
            3001: '数字传值有误3001',
            3002: '数字传值有误3002',
            3003: '数字传值有误3003',
            3004: '错误的申请状态',
            3005: '已审核的无法再次进行相同的审核结果',
            3006: '审核失败',
            3007: '没有操作权限'
        },
        getBossShareDiamondvip: {
            3001: '数字传值有误3001'
        },
        auditShopApply: {
            3001: '数字传值有误3001',
            3002: '数字传值有误3002',
            3003: '数字传值有误3003',
            3004: '错误的申请状态',
            3005: '已审核的无法再次进行相同的审核结果',
            3006: '审核失败',
            3007: '没有操作权限'
        },
        getShopApplyList: {
            3001: '手机号校验失败',
            3002: '数字传值有误3002',
            3003: 'target_idcard校验失败',
            3004: '数字传值有误3004'
        }
    },
    suppliers: {
        supplieradminlist: {
            3001: '数字传值有误3001'
        },
        updatesupplier: {
            3001: '手机号码格式错误',
            3002: '请把信息填写完整',
            3003: '数字传值有误3003',
            3004: '更新失败',
            3005: '图片没有上传过',
            3006: '供应商不存在',
            3007: '供应商名称不能重复'
        },
        updateSupplierFreight: {
            3001: '数字传值有误3001',
            3002: '计价方式参数有误',
            3003: '标题和详情不能为空'
        },
        editsupplierfreightdetail: {
            3001: '数字传值有误3001',
            3002: '价格有误',
            3003: '运费详情不存在'
        },
        addSupplierFreightdetail: {
            3001: '数字传值有误3001',
            3002: '价格有误',
            3003: '运费模版不存在'
        },
        addsupplier: {
            3001: '手机号码格式错误',
            3002: '提交数据不完整',
            3003: '未选择图片',
            3004: '添加失败',
            3005: '图片没有上传过',
            3006: '供应商名字不能重复'
        },
        addsupplierfreight: {
            3001: '数字传值有误3001',
            3002: '数字传值有误3002',
            3003: '标题和详情不能为空'
        },
        updatesupplierfreightarea: {
            3001: '状态码为空',
            3002: '请选择消息模板或触发器',
            3003: '请选择任务类型',
            3004: '该短信模板未启用或者不存在',
            3005: '该触发器未启用或者不存在',
            3006: '存在已启用的同类模板任务'
        },
        addsupplieradmin: {
            3001: '状态码为空',
            3002: '请选择消息模板或触发器',
            3003: '请选择任务类型',
            3004: '该短信模板未启用或者不存在',
            3005: '该触发器未启用或者不存在',
            3006: '存在已启用的同类模板任务'
        },
        getsuppliers: {
            3001: '状态码为空',
            3002: '请选择消息模板或触发器',
            3003: '请选择任务类型',
            3004: '该短信模板未启用或者不存在',
            3005: '该触发器未启用或者不存在',
            3006: '存在已启用的同类模板任务'
        },
        getsupplierfreights: {
            3001: '状态码为空',
            3002: '请选择消息模板或触发器',
            3003: '请选择任务类型',
            3004: '该短信模板未启用或者不存在',
            3005: '该触发器未启用或者不存在',
            3006: '存在已启用的同类模板任务'
        },
        getSupplierFreight: {
            3001: '状态码为空',
            3002: '请选择消息模板或触发器',
            3003: '请选择任务类型',
            3004: '该短信模板未启用或者不存在',
            3005: '该触发器未启用或者不存在',
            3006: '存在已启用的同类模板任务'
        },
        getSupplierFreightdetailList: {
            3001: '状态码为空',
            3002: '请选择消息模板或触发器',
            3003: '请选择任务类型',
            3004: '该短信模板未启用或者不存在',
            3005: '该触发器未启用或者不存在',
            3006: '存在已启用的同类模板任务'
        },
        getSupplierFreightdetail: {
            3001: '状态码为空',
            3002: '请选择消息模板或触发器',
            3003: '请选择任务类型',
            3004: '该短信模板未启用或者不存在',
            3005: '该触发器未启用或者不存在',
            3006: '存在已启用的同类模板任务'
        },
        getsupplierdata: {
            3001: '状态码为空',
            3002: '请选择消息模板或触发器',
            3003: '请选择任务类型',
            3004: '该短信模板未启用或者不存在',
            3005: '该触发器未启用或者不存在',
            3006: '存在已启用的同类模板任务'
        },
        getsuppliersall: {
            3001: '状态码为空',
            3002: '请选择消息模板或触发器',
            3003: '请选择任务类型',
            3004: '该短信模板未启用或者不存在',
            3005: '该触发器未启用或者不存在',
            3006: '存在已启用的同类模板任务'
        }
    },
    user: {
        userdemotion: {
            3001: '状态码为空',
            3002: '请选择消息模板或触发器',
            3003: '请选择任务类型',
            3004: '该短信模板未启用或者不存在',
            3005: '该触发器未启用或者不存在',
            3006: '存在已启用的同类模板任务'
        },
        userdemotionlist: {
            3001: '状态码为空',
            3002: '请选择消息模板或触发器',
            3003: '请选择任务类型',
            3004: '该短信模板未启用或者不存在',
            3005: '该触发器未启用或者不存在',
            3006: '存在已启用的同类模板任务'
        },
        getUsers: {
            3001: '状态码为空',
            3002: '请选择消息模板或触发器',
            3003: '请选择任务类型',
            3004: '该短信模板未启用或者不存在',
            3005: '该触发器未启用或者不存在',
            3006: '存在已启用的同类模板任务'
        }
    },
    admin: {
        editAdminBank: {
            3001: '状态码为空',
            3002: '请选择消息模板或触发器',
            3003: '请选择任务类型',
            3004: '该短信模板未启用或者不存在',
            3005: '该触发器未启用或者不存在',
            3006: '存在已启用的同类模板任务'
        },
        adminRemittance: {
            3001: '状态码为空',
            3002: '请选择消息模板或触发器',
            3003: '请选择任务类型',
            3004: '该短信模板未启用或者不存在',
            3005: '该触发器未启用或者不存在',
            3006: '存在已启用的同类模板任务'
        },
        auditAdminRemittance: {
            3001: '状态码为空',
            3002: '请选择消息模板或触发器',
            3003: '请选择任务类型',
            3004: '该短信模板未启用或者不存在',
            3005: '该触发器未启用或者不存在',
            3006: '存在已启用的同类模板任务'
        },
        checkUserCommissionTransfer: {
            3001: '状态码为空',
            3002: '请选择消息模板或触发器',
            3003: '请选择任务类型',
            3004: '该短信模板未启用或者不存在',
            3005: '该触发器未启用或者不存在',
            3006: '存在已启用的同类模板任务'
        },
        checkUserBountyTransfer: {
            3001: '状态码为空',
            3002: '请选择消息模板或触发器',
            3003: '请选择任务类型',
            3004: '该短信模板未启用或者不存在',
            3005: '该触发器未启用或者不存在',
            3006: '存在已启用的同类模板任务'
        },
        addAdminBank: {
            3001: '状态码为空',
            3002: '请选择消息模板或触发器',
            3003: '请选择任务类型',
            3004: '该短信模板未启用或者不存在',
            3005: '该触发器未启用或者不存在',
            3006: '存在已启用的同类模板任务'
        },
        checkUserBank: {
            3001: '状态码为空',
            3002: '请选择消息模板或触发器',
            3003: '请选择任务类型',
            3004: '该短信模板未启用或者不存在',
            3005: '该触发器未启用或者不存在',
            3006: '存在已启用的同类模板任务'
        },
        editInvoice: {
            3001: '状态码为空',
            3002: '请选择消息模板或触发器',
            3003: '请选择任务类型',
            3004: '该短信模板未启用或者不存在',
            3005: '该触发器未启用或者不存在',
            3006: '存在已启用的同类模板任务'
        },
        getAdminRemittance: {
            3001: '状态必须为数字',
            3002: '错误的审核类型',
            3003: '起始时间格式错误',
            3004: '中止时间格式错误',
            3005: '收款金额必须为数字'
        },
        getInvoice: {
            3001: '状态码为空',
            3002: '请选择消息模板或触发器',
            3003: '请选择任务类型',
            3004: '该短信模板未启用或者不存在',
            3005: '该触发器未启用或者不存在',
            3006: '存在已启用的同类模板任务'
        },
        getLogTransfer: {
            3001: '状态码为空',
            3002: '请选择消息模板或触发器',
            3003: '请选择任务类型',
            3004: '该短信模板未启用或者不存在',
            3005: '该触发器未启用或者不存在',
            3006: '存在已启用的同类模板任务'
        },
        getAdminBank: {
            3001: '状态码为空',
            3002: '请选择消息模板或触发器',
            3003: '请选择任务类型',
            3004: '该短信模板未启用或者不存在',
            3005: '该触发器未启用或者不存在',
            3006: '存在已启用的同类模板任务'
        },
        getUserBank: {
            3001: '状态码为空',
            3002: '请选择消息模板或触发器',
            3003: '请选择任务类型',
            3004: '该短信模板未启用或者不存在',
            3005: '该触发器未启用或者不存在',
            3006: '存在已启用的同类模板任务'
        },
        cmsmenu: {
            3001: '状态码为空',
            3002: '请选择消息模板或触发器',
            3003: '请选择任务类型',
            3004: '该短信模板未启用或者不存在',
            3005: '该触发器未启用或者不存在',
            3006: '存在已启用的同类模板任务'
        },
        cmsmenuone: {
            3001: '状态码为空',
            3002: '请选择消息模板或触发器',
            3003: '请选择任务类型',
            3004: '该短信模板未启用或者不存在',
            3005: '该触发器未启用或者不存在',
            3006: '存在已启用的同类模板任务'
        },
        addpermissionsgrouppower: {
            3001: '数字有误3001',
            3003: '权限分组不存在',
            3004: '权限分组不能为空',
            3005: '数据有误',
            3006: '菜单不存在',
            3007: '更改失败'
        },
        editmenu: {
            3001: '数字有误3001',
            3002: '菜单不存在',
            3003: '修改失败'
        },
        midifypasswd: {
            3001: '状态码为空',
            3002: '请选择消息模板或触发器',
            3003: '请选择任务类型',
            3004: '该短信模板未启用或者不存在',
            3005: '该触发器未启用或者不存在',
            3006: '存在已启用的同类模板任务'
        },
        editpermissionsapi: {
            3001: '状态码为空',
            3002: '请选择消息模板或触发器',
            3003: '请选择任务类型',
            3004: '该短信模板未启用或者不存在',
            3005: '该触发器未启用或者不存在',
            3006: '存在已启用的同类模板任务'
        },
        editpermissionsgroup: {
            3001: '分组名称错误',
            3003: '修改的用户不存在',
            3004: '分组错误',
            3005: '修改失败'
        },
        deladminpermissions: {
            3001: '分组id错误',
            3003: '权限分组不存在',
            3004: '删除用户不存在',
            3005: '管理员id有误',
            3006: '删除的管理员不存在',
            3007: '删除失败'
        },
        login: {
            3001: '状态码为空',
            3002: '请选择消息模板或触发器',
            3003: '请选择任务类型',
            3004: '该短信模板未启用或者不存在',
            3005: '该触发器未启用或者不存在',
            3006: '存在已启用的同类模板任务'
        },
        openboss: {
            3001: '状态码为空',
            3002: '请选择消息模板或触发器',
            3003: '请选择任务类型',
            3004: '该短信模板未启用或者不存在',
            3005: '该触发器未启用或者不存在',
            3006: '存在已启用的同类模板任务'
        },
        getopenbosslist: {
            3001: '状态码为空',
            3002: '请选择消息模板或触发器',
            3003: '请选择任务类型',
            3004: '该短信模板未启用或者不存在',
            3005: '该触发器未启用或者不存在',
            3006: '存在已启用的同类模板任务'
        },
        addadmin: {
            3001: '账号不能为空',
            3002: '密码必须为6-16个任意字符',
            3003: '只有root账户可以添加超级管理员',
            3004: '该账号已存在',
            3006: '添加失败'
        },
        addpermissionsapi: {
            3001: '状态码为空',
            3002: '请选择消息模板或触发器',
            3003: '请选择任务类型',
            3004: '该短信模板未启用或者不存在',
            3005: '该触发器未启用或者不存在',
            3006: '存在已启用的同类模板任务'
        },
        addpermissionsgroup: {
            3001: '分组名称错误',
            3005: '添加失败'
        },
        addadminpermissions: {
            3001: '数字有误3001',
            3003: '权限分组不存在',
            3004: '添加用户不存在',
            3005: '数字有误3005',
            3006: '该成员已存在',
            3007: '添加失败'
        },
        getAdminUsers: {
            3001: '状态码为空',
            3002: '请选择消息模板或触发器',
            3003: '请选择任务类型',
            3004: '该短信模板未启用或者不存在',
            3005: '该触发器未启用或者不存在',
            3006: '存在已启用的同类模板任务'
        },
        getpermissionsapi: {},
        getpermissionsapione: {
            3001: '接口有误'
        },
        getpermissionslist: {
            3001: '数字有误3001'
        },
        getpermissionsgroupadmin: {
            3001: '数字有误3001'
        },
        getgroupinfo: {
            3001: '状态码为空',
            3002: '请选择消息模板或触发器',
            3003: '请选择任务类型',
            3004: '该短信模板未启用或者不存在',
            3005: '该触发器未启用或者不存在',
            3006: '存在已启用的同类模板任务'
        },
        getadmingroup: {
            3001: '状态码为空',
            3002: '请选择消息模板或触发器',
            3003: '请选择任务类型',
            3004: '该短信模板未启用或者不存在',
            3005: '该触发器未启用或者不存在',
            3006: '存在已启用的同类模板任务'
        },
        getadmininfo: {
            3001: '状态码为空',
            3002: '请选择消息模板或触发器',
            3003: '请选择任务类型',
            3004: '该短信模板未启用或者不存在',
            3005: '该触发器未启用或者不存在',
            3006: '存在已启用的同类模板任务'
        }
    },
    category: {
        stopstartcate: {
            3001: '状态码为空',
            3002: '请选择消息模板或触发器',
            3003: '请选择任务类型',
            3004: '该短信模板未启用或者不存在',
            3005: '该触发器未启用或者不存在',
            3006: '存在已启用的同类模板任务'
        },
        getcatelist: {
            3001: '状态码为空',
            3002: '请选择消息模板或触发器',
            3003: '请选择任务类型',
            3004: '该短信模板未启用或者不存在',
            3005: '该触发器未启用或者不存在',
            3006: '存在已启用的同类模板任务'
        },
        allCateList: {
            3001: '状态码为空',
            3002: '请选择消息模板或触发器',
            3003: '请选择任务类型',
            3004: '该短信模板未启用或者不存在',
            3005: '该触发器未启用或者不存在',
            3006: '存在已启用的同类模板任务'
        },
        saveeditcate: {
            3001: '状态码为空',
            3002: '请选择消息模板或触发器',
            3003: '请选择任务类型',
            3004: '该短信模板未启用或者不存在',
            3005: '该触发器未启用或者不存在',
            3006: '存在已启用的同类模板任务'
        },
        saveaddcate: {
            3001: '状态码为空',
            3002: '请选择消息模板或触发器',
            3003: '请选择任务类型',
            3004: '该短信模板未启用或者不存在',
            3005: '该触发器未启用或者不存在',
            3006: '存在已启用的同类模板任务'
        },
        getthreecate: {
            3001: '状态码为空',
            3002: '请选择消息模板或触发器',
            3003: '请选择任务类型',
            3004: '该短信模板未启用或者不存在',
            3005: '该触发器未启用或者不存在',
            3006: '存在已启用的同类模板任务'
        },
        addcatepage: {
            3001: '状态码为空',
            3002: '请选择消息模板或触发器',
            3003: '请选择任务类型',
            3004: '该短信模板未启用或者不存在',
            3005: '该触发器未启用或者不存在',
            3006: '存在已启用的同类模板任务'
        },
        editcatepage: {
            3001: '状态码为空',
            3002: '请选择消息模板或触发器',
            3003: '请选择任务类型',
            3004: '该短信模板未启用或者不存在',
            3005: '该触发器未启用或者不存在',
            3006: '存在已启用的同类模板任务'
        }
    },
    goods: {
        updowngoods: {
            3001: '状态码为空',
            3002: '请选择消息模板或触发器',
            3003: '请选择任务类型',
            3004: '该短信模板未启用或者不存在',
            3005: '该触发器未启用或者不存在',
            3006: '存在已启用的同类模板任务'
        },
        saveupdategoods: {
            3001: '状态码为空',
            3002: '请选择消息模板或触发器',
            3003: '请选择任务类型',
            3004: '该短信模板未启用或者不存在',
            3005: '该触发器未启用或者不存在',
            3006: '存在已启用的同类模板任务'
        },
        delgoodsspec: {
            3001: '状态码为空',
            3002: '请选择消息模板或触发器',
            3003: '请选择任务类型',
            3004: '该短信模板未启用或者不存在',
            3005: '该触发器未启用或者不存在',
            3006: '存在已启用的同类模板任务'
        },
        delgoodsimage: {
            3001: '状态码为空',
            3002: '请选择消息模板或触发器',
            3003: '请选择任务类型',
            3004: '该短信模板未启用或者不存在',
            3005: '该触发器未启用或者不存在',
            3006: '存在已启用的同类模板任务'
        },
        getgoodslist: {
            3001: '状态码为空',
            3002: '请选择消息模板或触发器',
            3003: '请选择任务类型',
            3004: '该短信模板未启用或者不存在',
            3005: '该触发器未启用或者不存在',
            3006: '存在已启用的同类模板任务'
        },
        sortimagedetail: {
            3001: '状态码为空',
            3002: '请选择消息模板或触发器',
            3003: '请选择任务类型',
            3004: '该短信模板未启用或者不存在',
            3005: '该触发器未启用或者不存在',
            3006: '存在已启用的同类模板任务'
        },
        uploadgoodsimages: {
            3001: '状态码为空',
            3002: '请选择消息模板或触发器',
            3003: '请选择任务类型',
            3004: '该短信模板未启用或者不存在',
            3005: '该触发器未启用或者不存在',
            3006: '存在已启用的同类模板任务'
        },
        saveaddgoods: {
            3001: '状态码为空',
            3002: '请选择消息模板或触发器',
            3003: '请选择任务类型',
            3004: '该短信模板未启用或者不存在',
            3005: '该触发器未启用或者不存在',
            3006: '存在已启用的同类模板任务'
        },
        addgoodsspec: {
            3001: '状态码为空',
            3002: '请选择消息模板或触发器',
            3003: '请选择任务类型',
            3004: '该短信模板未启用或者不存在',
            3005: '该触发器未启用或者不存在',
            3006: '存在已启用的同类模板任务'
        },
        editgoodssku: {
            3001: '状态码为空',
            3002: '请选择消息模板或触发器',
            3003: '请选择任务类型',
            3004: '该短信模板未启用或者不存在',
            3005: '该触发器未启用或者不存在',
            3006: '存在已启用的同类模板任务'
        },
        getgoodssku: {
            3001: '状态码为空',
            3002: '请选择消息模板或触发器',
            3003: '请选择任务类型',
            3004: '该短信模板未启用或者不存在',
            3005: '该触发器未启用或者不存在',
            3006: '存在已启用的同类模板任务'
        },
        getonegoods: {
            3001: '状态码为空',
            3002: '请选择消息模板或触发器',
            3003: '请选择任务类型',
            3004: '该短信模板未启用或者不存在',
            3005: '该触发器未启用或者不存在',
            3006: '存在已启用的同类模板任务'
        }
    },
    label: {
        labeldel: {
            3001: '状态码为空',
            3002: '请选择消息模板或触发器',
            3003: '请选择任务类型',
            3004: '该短信模板未启用或者不存在',
            3005: '该触发器未启用或者不存在',
            3006: '存在已启用的同类模板任务'
        },
        goodslabellist: {
            3001: '状态码为空',
            3002: '请选择消息模板或触发器',
            3003: '请选择任务类型',
            3004: '该短信模板未启用或者不存在',
            3005: '该触发器未启用或者不存在',
            3006: '存在已启用的同类模板任务'
        },
        searchlabel: {
            3001: '状态码为空',
            3002: '请选择消息模板或触发器',
            3003: '请选择任务类型',
            3004: '该短信模板未启用或者不存在',
            3005: '该触发器未启用或者不存在',
            3006: '存在已启用的同类模板任务'
        },
        addlabeltogoods: {
            3001: '状态码为空',
            3002: '请选择消息模板或触发器',
            3003: '请选择任务类型',
            3004: '该短信模板未启用或者不存在',
            3005: '该触发器未启用或者不存在',
            3006: '存在已启用的同类模板任务'
        }
    },
    provinces: {
        getProvinceCity: {
            3001: '状态码为空',
            3002: '请选择消息模板或触发器',
            3003: '请选择任务类型',
            3004: '该短信模板未启用或者不存在',
            3005: '该触发器未启用或者不存在',
            3006: '存在已启用的同类模板任务'
        },
        getArea: {
            3001: '状态码为空',
            3002: '请选择消息模板或触发器',
            3003: '请选择任务类型',
            3004: '该短信模板未启用或者不存在',
            3005: '该触发器未启用或者不存在',
            3006: '存在已启用的同类模板任务'
        },
        getCity: {
            3001: '状态码为空',
            3002: '请选择消息模板或触发器',
            3003: '请选择任务类型',
            3004: '该短信模板未启用或者不存在',
            3005: '该触发器未启用或者不存在',
            3006: '存在已启用的同类模板任务'
        },
        getprovincecitybyfreight: {
            3001: '状态码为空',
            3002: '请选择消息模板或触发器',
            3003: '请选择任务类型',
            3004: '该短信模板未启用或者不存在',
            3005: '该触发器未启用或者不存在',
            3006: '存在已启用的同类模板任务'
        }
    },
    spec: {
        saveEditSpecAttr: {
            3001: '状态码为空',
            3002: '请选择消息模板或触发器',
            3003: '请选择任务类型',
            3004: '该短信模板未启用或者不存在',
            3005: '该触发器未启用或者不存在',
            3006: '存在已启用的同类模板任务'
        },
        delspecattr: {
            3001: '状态码为空',
            3002: '请选择消息模板或触发器',
            3003: '请选择任务类型',
            3004: '该短信模板未启用或者不存在',
            3005: '该触发器未启用或者不存在',
            3006: '存在已启用的同类模板任务'
        },
        getspeclist: {
            3001: '状态码为空',
            3002: '请选择消息模板或触发器',
            3003: '请选择任务类型',
            3004: '该短信模板未启用或者不存在',
            3005: '该触发器未启用或者不存在',
            3006: '存在已启用的同类模板任务'
        },
        savespecattr: {
            3001: '状态码为空',
            3002: '请选择消息模板或触发器',
            3003: '请选择任务类型',
            3004: '该短信模板未启用或者不存在',
            3005: '该触发器未启用或者不存在',
            3006: '存在已启用的同类模板任务'
        },
        addattrpage: {
            3001: '状态码为空',
            3002: '请选择消息模板或触发器',
            3003: '请选择任务类型',
            3004: '该短信模板未启用或者不存在',
            3005: '该触发器未启用或者不存在',
            3006: '存在已启用的同类模板任务'
        },
        getspecattr: {
            3001: '状态码为空',
            3002: '请选择消息模板或触发器',
            3003: '请选择任务类型',
            3004: '该短信模板未启用或者不存在',
            3005: '该触发器未启用或者不存在',
            3006: '存在已启用的同类模板任务'
        },
        getAttr: {
            3001: '状态码为空',
            3002: '请选择消息模板或触发器',
            3003: '请选择任务类型',
            3004: '该短信模板未启用或者不存在',
            3005: '该触发器未启用或者不存在',
            3006: '存在已启用的同类模板任务'
        },
        getEditData: {
            3001: '状态码为空',
            3002: '请选择消息模板或触发器',
            3003: '请选择任务类型',
            3004: '该短信模板未启用或者不存在',
            3005: '该触发器未启用或者不存在',
            3006: '存在已启用的同类模板任务'
        }
    },
    subject: {
        editsubject: {
            3001: '状态码为空',
            3002: '请选择消息模板或触发器',
            3003: '请选择任务类型',
            3004: '该短信模板未启用或者不存在',
            3005: '该触发器未启用或者不存在',
            3006: '存在已启用的同类模板任务'
        },
        delgoodssubject: {
            3001: '状态码为空',
            3002: '请选择消息模板或触发器',
            3003: '请选择任务类型',
            3004: '该短信模板未启用或者不存在',
            3005: '该触发器未启用或者不存在',
            3006: '存在已启用的同类模板任务'
        },
        delgoodssubjectassoc: {
            3001: '状态码为空',
            3002: '请选择消息模板或触发器',
            3003: '请选择任务类型',
            3004: '该短信模板未启用或者不存在',
            3005: '该触发器未启用或者不存在',
            3006: '存在已启用的同类模板任务'
        },
        subjectgoodsassoc: {
            3001: '状态码为空',
            3002: '请选择消息模板或触发器',
            3003: '请选择任务类型',
            3004: '该短信模板未启用或者不存在',
            3005: '该触发器未启用或者不存在',
            3006: '存在已启用的同类模板任务'
        },
        getallsubject: {
            3001: '状态码为空',
            3002: '请选择消息模板或触发器',
            3003: '请选择任务类型',
            3004: '该短信模板未启用或者不存在',
            3005: '该触发器未启用或者不存在',
            3006: '存在已启用的同类模板任务'
        },
        addsubject: {
            3001: '状态码为空',
            3002: '请选择消息模板或触发器',
            3003: '请选择任务类型',
            3004: '该短信模板未启用或者不存在',
            3005: '该触发器未启用或者不存在',
            3006: '存在已启用的同类模板任务'
        },
        getsubjectdetail: {
            3001: '状态码为空',
            3002: '请选择消息模板或触发器',
            3003: '请选择任务类型',
            3004: '该短信模板未启用或者不存在',
            3005: '该触发器未启用或者不存在',
            3006: '存在已启用的同类模板任务'
        },
        getgoodssubject: {
            3001: '状态码为空',
            3002: '请选择消息模板或触发器',
            3003: '请选择任务类型',
            3004: '该短信模板未启用或者不存在',
            3005: '该触发器未启用或者不存在',
            3006: '存在已启用的同类模板任务'
        }
    },
    upload: {
        uploadfile: {
            3001: '状态码为空',
            3002: '请选择消息模板或触发器',
            3003: '请选择任务类型',
            3004: '该短信模板未启用或者不存在',
            3005: '该触发器未启用或者不存在',
            3006: '存在已启用的同类模板任务'
        },
        uploadmultifile: {
            3001: '状态码为空',
            3002: '请选择消息模板或触发器',
            3003: '请选择任务类型',
            3004: '该短信模板未启用或者不存在',
            3005: '该触发器未启用或者不存在',
            3006: '存在已启用的同类模板任务'
        }
    }
}

function msgHint(code, url = '') {
    if (!url) throw new Error('url未传入');
    let port = url.split('/');
    let text = '';
    if (errCollect[port[0]] && errCollect[port[0]][port[1]] && errCollect[port[0]][port[1]][code]) {
        text = errCollect[port[0]][port[1]][code]
    } else {
        text = '意料之外的错误'
    }
    Message({ message: text, type: 'error' });
}
export {
    msgHint
}