Vue.component('showform', {
    template: '#show-form',
    data(){
        return {
            data: {nama: '', warna: '', perusahaan: '', tahun: '' }
        }
    },
    methods: {
        Save: function() {
            this.$emit('send-data', this.data);
            this.data.nama="";
            this.data.warna="";
            this.data.perusahaan="";
            this.data.tahun="";
        }
    }
})
Vue.component('showdata', {
    template: '#show-data',
    props: ['data']
})

var app = new Vue ({
    el: "#app",
    data: {
        DataMobil: {}
    },
    methods: {
        getData: function (value) {
            this.DataMobil = {
                nama: value.nama,
                warna: value.warna,
                perusahaan: value.perusahaan,
                tahun: value.tahun
            }
        }
    }
})