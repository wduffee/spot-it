// sets of demo data

var words = ["Aardvark","Buffalo","Cow","Doc","Elephant","Fox","Gopher","Hawk","Ibex","Joey","Kangaroo","Lion","Mouse"]; // 13 words (good)

var states = ['Alabama','Alaska','Arizona','Arkansas','California','Colorado','Connecticut','Delaware','District Of Columbia','Florida','Georgia','Hawaii','Idaho','Illinois','Indiana','Iowa','Kansas','Kentucky','Louisiana','Maine','Maryland','Massachusetts','Michigan','Minnesota','Mississippi','Missouri','Montana','Nebraska','Nevada','New Hampshire','New Jersey','New Mexico','New York','North Carolina','North Dakota','Ohio','Oklahoma','Oregon','Pennsylvania','Rhode Island','South Carolina','South Dakota','Tennessee','Texas','Utah','Vermont','Virginia','Washington','West Virginia','Wisconsin','Wyoming'];


// landscapes
var images = [
    'http://photos.smugmug.com/photos/304577222_Qn7CQRf-S.jpg',
    'http://photos.smugmug.com/photos/403266789_mCSMHRD-S.jpg',
    'http://photos.smugmug.com/photos/359969600_nRwXqXM-S.jpg',
    'http://photos.smugmug.com/photos/1122710934_cRdphsk-S.jpg',
    'http://photos.smugmug.com/photos/131782448_Fqc3JCw-S.jpg',
    'http://photos.smugmug.com/photos/304571981_qGFWfS8-S.jpg',
    'http://photos.smugmug.com/photos/401587434_GR3DFB5-S.jpg',
    'http://photos.smugmug.com/photos/580400758_z2GZkJ8-S.jpg',
    'http://photos.smugmug.com/photos/1562689053_Q43Zz2X-S.jpg',
    'http://photos.smugmug.com/photos/580386980_WLTF9b4-S.jpg',
    'http://photos.smugmug.com/photos/1257250439_LBrVLtD-S.jpg',
    'http://photos.smugmug.com/photos/131783235_g8S24Xv-S.jpg',
    'http://photos.smugmug.com/photos/144710668_knmqVdW-S.jpg',
    'http://photos.smugmug.com/photos/634102549_C38Sf6j-S.jpg',
    'http://photos.smugmug.com/photos/580400351_Q5vwk7F-S.jpg',
    'http://photos.smugmug.com/photos/580401707_QdJ7wsm-S.jpg',
    'http://photos.smugmug.com/photos/1257250132_mpnKXwZ-S.jpg',
    'http://photos.smugmug.com/photos/243635385_Xvf535r-S.jpg',
    'http://photos.smugmug.com/photos/1122711641_ZmQ9Rm2-S.jpg',
    'http://photos.smugmug.com/photos/243643072_tF8B272-S.jpg',
    'http://photos.smugmug.com/photos/359971702_r4vPc9g-S.jpg',
    'http://photos.smugmug.com/photos/580401883_43t9qPx-S.jpg',
    'http://photos.smugmug.com/photos/2544855897_vtCJzJS-S.jpg',
    'http://photos.smugmug.com/photos/132071734_4cSHSft-S.jpg',
    'http://photos.smugmug.com/photos/635273000_bgvHvZJ-S.jpg',
    'http://photos.smugmug.com/photos/1220410064_8CPnKds-S.jpg',
    'http://photos.smugmug.com/photos/3176076557_Vj76Qhk-S.jpg',
    'http://photos.smugmug.com/photos/304579509_tShBF9R-S.jpg',
    'http://photos.smugmug.com/photos/359943832_pswZFMz-S.jpg',
    'http://photos.smugmug.com/photos/359968395_WJwCbFN-S.jpg',
    'http://photos.smugmug.com/photos/131776376_St2Dk9p-S.jpg',
    'http://photos.smugmug.com/photos/144708886_wQ2MSNL-S.jpg',
    'http://photos.smugmug.com/photos/243632662_hzGDSk5-S.jpg',
    'http://photos.smugmug.com/photos/243633998_mjJFwNR-S.jpg',
    'http://photos.smugmug.com/photos/243637880_qWVhwFt-S.jpg',
    'http://photos.smugmug.com/photos/580386572_r6PkJCj-S.jpg',
    'http://photos.smugmug.com/photos/580399888_k2szmDx-S.jpg',
    'http://photos.smugmug.com/photos/1122731453_tmzv9PQ-S.jpg',
    'http://photos.smugmug.com/photos/1220410777_3WPSF8K-S.jpg',
    'http://photos.smugmug.com/photos/1517506324_JcDZdqJ-S.jpg',
    'http://photos.smugmug.com/photos/2544858108_WkH2nJk-S.jpg',
    'http://photos.smugmug.com/photos/2878142096_dMRKG7T-S.jpg',
    'http://photos.smugmug.com/photos/359951837_rhVRH8b-S.jpg',
    'http://photos.smugmug.com/photos/401582841_DwWw8QX-S.jpg',
    'http://photos.smugmug.com/photos/580385759_988bmhN-S.jpg',
    'http://photos.smugmug.com/photos/635275578_j5JQGb4-S.jpg',
    'http://photos.smugmug.com/photos/1072459553_nBNLtQx-S.jpg',
    'http://photos.smugmug.com/photos/1266064857_7cBT84h-S.jpg',
    'http://photos.smugmug.com/photos/1507210214_7Bt9hr5-S.jpg',
    'http://photos.smugmug.com/photos/2152507427_vxVq8Vc-S.jpg',
    'http://photos.smugmug.com/photos/2152525449_2wSrhXF-S.jpg',
    'http://photos.smugmug.com/photos/2544860439_qQwPVx3-S.jpg',
    'http://photos.smugmug.com/photos/3176061430_MGpSKSS-S.jpg',
    'http://photos.smugmug.com/photos/3176071063_CBFkNPV-S.jpg',
    'http://photos.smugmug.com/photos/206363846_6KzK399-S.jpg',
    'http://photos.smugmug.com/photos/206365579_ZhWbLj3-S.jpg',
    'http://photos.smugmug.com/photos/2455422533_dbTmrzS-S.jpg'
];

// portraits
var images2 = [
    'http://photos.smugmug.com/photos/304574382_FxSDMkH-S.jpg',
    'http://photos.smugmug.com/photos/304575261_p3D5j2V-S.jpg',
    'http://photos.smugmug.com/photos/359965375_qTRmwzS-S.jpg',
    'http://photos.smugmug.com/photos/2455421437_jBwR3v4-S.jpg',
    'http://photos.smugmug.com/photos/1220410635_MpMgg8s-S.jpg',
    'http://photos.smugmug.com/photos/243636674_Pr3vLgr-S.jpg',
    'http://photos.smugmug.com/photos/580383672_FcBsnBQ-S.jpg',
    'http://photos.smugmug.com/photos/304573075_rwfCQTF-S.jpg',
    'http://photos.smugmug.com/photos/243631534_mSd3CKV-S.jpg',
    'http://photos.smugmug.com/photos/401578633_W2tdPGP-S.jpg',
    'http://photos.smugmug.com/photos/401580975_x4JgJpV-S.jpg',
    'http://photos.smugmug.com/photos/144699279_MszBSj4-S.jpg',
    'http://photos.smugmug.com/photos/359945805_vt3pT5H-S.jpg',
    'http://photos.smugmug.com/photos/401589272_HHLxVqr-S.jpg',
    'http://photos.smugmug.com/photos/304576148_xLhkZcH-S.jpg',
    'http://photos.smugmug.com/photos/2455420987_5dNCxSx-S.jpg',
    'http://photos.smugmug.com/photos/359953381_qfJKd7B-S.jpg',
    'http://photos.smugmug.com/photos/401585054_KgpjV4h-S.jpg',
    'http://photos.smugmug.com/photos/144704753_4nCJPSG-S.jpg',
    'http://photos.smugmug.com/photos/580384501_VCVgMBF-S.jpg',
    'http://photos.smugmug.com/photos/635272155_dC3mxLH-S.jpg',
    'http://photos.smugmug.com/photos/144698745_c5GHz49-S.jpg',
    'http://photos.smugmug.com/photos/206364607_NrsbdHW-S.jpg',
    'http://photos.smugmug.com/photos/359966942_77nn5R6-S.jpg',
    'http://photos.smugmug.com/photos/1122711220_n8dcrbk-S.jpg',
    'http://photos.smugmug.com/photos/1122731111_6RBw4c3-S.jpg',
    'http://photos.smugmug.com/photos/206363240_wCx65vv-S.jpg',
    'http://photos.smugmug.com/photos/2455422878_WTPfgMw-S.jpg',
    'http://photos.smugmug.com/photos/3176057980_g2dQv7g-S.jpg',
    'http://photos.smugmug.com/photos/3176069743_mSDP7sQ-S.jpg',
    'http://photos.smugmug.com/photos/2544852374_kv5nxnp-S.jpg'
];