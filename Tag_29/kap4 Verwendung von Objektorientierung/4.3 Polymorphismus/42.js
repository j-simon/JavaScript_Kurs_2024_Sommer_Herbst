function activateLamp(lamp) {
    switch (lamp) {
      case 'lamp': {
        toggleActive();
      }
      case 'flashlight': {
        toggleFlashlightActive();
      }
    }
  }