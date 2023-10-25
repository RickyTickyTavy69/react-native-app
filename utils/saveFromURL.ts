import * as MediaLibrary from "expo-media-library";
import moment from "moment";
import * as FileSystem from "expo-file-system";

const saveFromURL = async (imageUrl: string) => {

    const saveFile = async (fileUri : string) => {
        // not sure which of those two do I need to get permission if not granted, should edit later.
        const permission = MediaLibrary.requestPermissionsAsync();
        const permission2 = MediaLibrary.getPermissionsAsync();

        try {
            const asset = await MediaLibrary.createAssetAsync(fileUri);
            const album = await MediaLibrary.getAlbumAsync('pictureAI');
            if (album == null) {
                await MediaLibrary.createAlbumAsync('pictureAI', asset, false);
            } else {
                await MediaLibrary.addAssetsToAlbumAsync([asset], album, false);
            }
            alert("saved to fotos");
        } catch (err) {
            console.log("Save err: ", err)
        }
    }

    let date = moment().format('YYYYMMDDhhmmss');
    let fileUri = FileSystem.documentDirectory + `${date}.jpg`;
    try {
        const res = await FileSystem.downloadAsync(imageUrl, fileUri);
        await saveFile(res.uri);
    } catch (err) {
        console.log("FS Err: ", err);
    }
}

export default saveFromURL;