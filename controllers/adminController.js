exports.listEmployee = async (req, res, next) => {
    res.status(200).json({
        status: 'success',
        data: [
            'employee1',
            'employee2',
            'employee3',
            'employee4',
            'employee5',
            'employee6',
        ]
    })
}
exports.addEmployee = async (req, res, next) => {
    res.status(200).json({
        status: 'success',
        data: null
    })
}
exports.freezeEmployee = async (req, res, next) => {
    res.status(200).json({
        status: 'success',
        data: null
    })
}
exports.deleteEmployee = async (req, res, next) => {
    res.status(200).json({
        status: 'success',
        data: null
    })
}
exports.getEmployeeData = async (req, res, next) => {
    res.status(200).json({
        status: 'success',
        data: null
    })
}
