import React, { useEffect, useRef, useState } from 'react';
import * as tf from '@tensorflow/tfjs';
import * as tmImage from '@teachablemachine/image';

const TeachableMachineComponent = ({ url }) => {
    const imageRef = useRef(null);
    const labelContainerRef = useRef(null);
    const [model, setModel] = useState(null);
    const [maxPredictions, setMaxPredictions] = useState(0);

    useEffect(() => {
        init();
    }, []);

    const init = async () => {
        const modelURL = url + 'model.json';
        const metadataURL = url + 'metadata.json';

        const loadedModel = await tmImage.load(modelURL, metadataURL);
        setModel(loadedModel);
        setMaxPredictions(loadedModel.getTotalClasses());

        for (let i = 0; i < maxPredictions; i++) {
            labelContainerRef.current.appendChild(document.createElement('div'));
        }
    };
    function extractNumberFromString(inputString) {
        // Use regular expression to extract the numerical part
        const numberMatch = inputString.match(/\d+(\.\d+)?/);
        // If a numerical part is found, convert it to a number and return
        if (numberMatch) {
            return parseInt(numberMatch[0]);
        } else {
            // If no numerical part is found, return NaN or handle it as you wish
            return NaN;
        }
    }

    const predict = async () => {
        const prediction = await model.predict(imageRef.current);
        for (let i = 0; i < maxPredictions; i++) {
            const classPrediction =
                prediction[i].className + ': ' + prediction[i].probability.toFixed(2);
                if (extractNumberFromString(classPrediction)  > 0.5) {
                    labelContainerRef.current.childNodes[i].innerText = 'Category is ' + classPrediction.split(':')[0].trim();
        }
    }
    };

    const handleImageUpload = (event) => {
        const { files } = event.target;
        if (files.length > 0) {
            const url = URL.createObjectURL(files[0]);
            imageRef.current.src = url;
        }
    };

    return (
        <div>
            <h1>Teachable Machine Image Model</h1>
            <input type="file" accept="image/*" onChange={handleImageUpload} />
            <button type='button' onClick={predict}>Predict</button>
            <img ref={imageRef} style={{ display: 'none' }} />
            <div ref={labelContainerRef}></div>
        </div>
    );
};

export default TeachableMachineComponent;