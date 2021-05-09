using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.Networking;
// using UnityEngine.EventSystems;

[System.Serializable]
public class Position {
    public float x;
    public float y;
    public float z;
}

[System.Serializable]
public class PositionsCollection {
   public Position[] positions;
}

//defining behaviour of the cube

public class NewBehaviourScript : MonoBehaviour {
  // string local = "http://localhost:3000/";
    public GameObject obj;
    public int frames = 0;

    // Start is called before the first frame update
    void Start() {
    }

    // Update is called once per frame
    void Update() {
        frames++;
        // Debug.Log("Hello...");
        //StartCoroutine(GetRequest("https://bas-myapp.herokuapp.com/"));
        if(frames % 600 == 0) {
          StartCoroutine(GetRequest("http://localhost:3000/postcoords"));
        }
    }

    private void OnMouseDown() {
      StartCoroutine(PostRequest("http://localhost:3000/postcoords"));
    }

    IEnumerator GetRequest(string uri) {
        //when this is true
        using (UnityWebRequest webRequest = UnityWebRequest.Get(uri)) {
            // Request and wait for the desired page; this happens
            yield return webRequest.SendWebRequest();

            string[] pages = uri.Split('/');
            int page = pages.Length - 1;

            if (webRequest.isNetworkError) {
                Debug.Log(pages[page] + ": Error: " + webRequest.error);
            } else {
                Debug.Log(pages[page] + ":\nReceived: " + webRequest.downloadHandler.text);
                PositionsCollection positions = JsonUtility.FromJson<PositionsCollection>(webRequest.downloadHandler.text);
                Debug.Log("HELLO WE ARE...");
                Debug.Log(positions);
                for (int i = 0; i < positions.positions.Length; i++) {
                  float x = positions.positions[i].x;
                  float y = positions.positions[i].y;
                  float z = positions.positions[i].z;

                  // Update an object position with x, y, z - JBG
                  obj.transform.position = new Vector3(x, y, z);
                }
            }
        }
    }

    IEnumerator PostRequest(string uri) {
        WWWForm form = new WWWForm();
        form.AddField("x", "" + transform.position.x);
        form.AddField("y", "" + transform.position.y);
        form.AddField("z", "" + transform.position.z);

        Debug.Log(transform.position.x);
        using (UnityWebRequest webRequest = UnityWebRequest.Post(uri, form)) {
            yield return webRequest.SendWebRequest();
            if (webRequest.isNetworkError || webRequest.isHttpError) {
                Debug.Log(webRequest.error);
            } else {
                Debug.Log("Form upload complete!");
            }
        }
    }
}
