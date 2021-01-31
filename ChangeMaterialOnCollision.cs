using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.Networking;

public class ChangeMaterialOnCollision : MonoBehaviour {

    private Rigidbody _body;

    public Material[] m;

    float smooth = 5.0f;
    float tiltAngle = 60.0f;
    int i = 0;

    private void Awake() {
      _body = GetComponent<Rigidbody>();
    }

    // Start is called before the first frame update
    void Start() {
    }

    // Update is called once per frame
    void Update() {
      // I'm a global button push - JBG
      //if(Input.GetButtonDown("Fire1")) {
      //}
    }

    private void ChangeTexture() {
      //int i = UnityEngine.Random.Range(0, m.Length);
      GetComponent<Renderer>().material = m[++i % m.Length];
    }

    private void Rotate() {
      // Smoothly tilts a transform towards a target rotation.
      float tiltAroundZ = tiltAngle++;
      //float tiltAroundX = tiltAngle++;

      // Rotate the cube by converting the angles into a quaternion.
      Quaternion target = Quaternion.Euler(0, 0, tiltAroundZ);

      // Dampen towards the target rotation
      transform.rotation = Quaternion.Slerp(transform.rotation, target,  Time.deltaTime * smooth);
    }
    
    private void OnCollisionEnter(Collision other) {
      _body.useGravity = true;
      ChangeTexture();
    }

    private void OnMouseDown() {
      _body.useGravity = true;
      _body.AddForce(Vector3.up * 100f);

      ChangeTexture();
      Rotate();

      TextManager.score++;
      Debug.Log("Score: " + TextManager.score);

      //StartCoroutine(GetRequest("http://localhost:3000/"));
      StartCoroutine(PostRequest("http://localhost:3000/"));
    }

    IEnumerator GetRequest(string uri)
    {
        using (UnityWebRequest webRequest = UnityWebRequest.Get(uri))
        {
            // Request and wait for the desired page.
            yield return webRequest.SendWebRequest();

            string[] pages = uri.Split('/');
            int page = pages.Length - 1;

            if (webRequest.isNetworkError)
            {
                Debug.Log(pages[page] + ": Error: " + webRequest.error);
            }
            else
            {
                Debug.Log(pages[page] + ":\nReceived: " + webRequest.downloadHandler.text);
            }
        }
    }

    IEnumerator PostRequest(string uri)
    {
        WWWForm form = new WWWForm();
        form.AddField("alice", "bos");

        using (UnityWebRequest webRequest = UnityWebRequest.Post(uri, form))
        {
            yield return webRequest.SendWebRequest();

            if (webRequest.isNetworkError || webRequest.isHttpError)
            {
                Debug.Log(webRequest.error);
            }
            else
            {
                Debug.Log("Form upload complete!");
            }
        }
    }
}
