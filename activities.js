const mongo = require('./mongo')
const activitieSchema = require('./activities-schema')

module.exports.addActivity = async (tipoAtividade, desc, link, nota, data, hora) => {
    return await mongo().then(async mongoose =>{
        try{
            console.log('Running findOneAndUpdate()')
            const result = await activitieSchema.findOneAndUpdate({
                tipoAtividade,
                desc
            }, {
                tipoAtividade,
                desc,
                link,
                nota,
                data,
                hora
            }, {
                upsert: true,
                new: true,
                useFindAndModify: false
            })

            console.log('RESULT: ', result)
            return result
        }finally{
            mongoose.connection.close()
        }
    }) 
}