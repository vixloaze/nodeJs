exports.index = (req, res) => {
    const query = req.query;
    res.send(query);
}
exports.create = (req, res) => {
    const body = req.body;
    console.log(req.body);
    res.send(body);
}
exports.feedInfo = (req, res) => {
    const id = req.params.id;
    res.send(`${id} 피드의 상세 정보`);
}
exports.update = (req, res) => {
    const id = req.params.id;
    res.send(`${id} 피드 수정`);
}
exports.delete = (req, res) => {
    const id = req.params.id;
    res.send(`${id} 피드 삭제`);
}