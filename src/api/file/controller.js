const repository = require('./repository')

// 파일 업로드
exports.upload = async (req, res) => {
    const file = req.file;

    const { affectedRows, insertId } = await repository.create(file.originalname, file.path, file.size);
    if (affectedRows > 0 ){
        return res.send({ result: "ok", id: insertId })
    } else {
        return res.send({ result: "fail"})
    }
}

exports.download = async (req, res) => {
    const { id } = req.params;
    const item =  await repository.show(id);

    if(item == null) {
        return res.send({ result: "fail"})
    }

    res.download(item.file_path, item.originalname, (err)=> {
        if (err) {
            res.send({ result: 'error' , message: err.message });
        }
    });
}

