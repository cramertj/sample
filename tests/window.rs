extern crate sample;

use sample::frame::Frame;
use sample::window::Windower;

#[test]
fn test_window_at_phase() {
    let window = sample::window::hanning::<[f64; 1]>(9);
    let expected = [0.0, 0.1464, 0.5000, 0.8536, 1., 0.8536, 0.5000, 0.1464, 0., 0.1464];
    for (r, e) in window.zip(expected.iter()) {
        println!("Exp: {}\t\tFound: {}", e, r[0]);
        assert!((r[0] - e).abs() < 0.001);
    }
}

#[test]
fn test_windower() {
    let data = [[0.1f64], [0.1], [0.2], [0.2], [0.3], [0.3], [0.4], [0.4]];
    let expected = [[[0.1], [0.1]], [[0.1], [0.2]], [[0.2], [0.2]], [[0.2], [0.3]],
                    [[0.3], [0.3]], [[0.3], [0.4]], [[0.4], [0.4]]];

    let windower = Windower::rectangle(&data, 2, 1);
    for (chunk, expected_chunk) in windower.zip(expected.iter()) {
        for (r, e) in chunk.zip(expected_chunk.iter()) {
            for (r_chan, e_chan) in r.channels().zip(e.channels()) {
                println!("Exp: {}\t\tFound: {}", e_chan, r_chan);
                assert!((r_chan - e_chan).abs() < 0.001);
            }
        }
    }
}
