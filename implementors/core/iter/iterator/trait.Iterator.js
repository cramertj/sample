(function() {var implementors = {};
implementors["sample"] = ["impl&lt;F&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/iter/iterator/trait.Iterator.html' title='core::iter::iterator::Iterator'>Iterator</a> for <a class='struct' href='sample/frame/struct.Channels.html' title='sample::frame::Channels'>Channels</a>&lt;F&gt; <span class='where'>where F: <a class='trait' href='sample/frame/trait.Frame.html' title='sample::frame::Frame'>Frame</a></span>","impl&lt;F&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/iter/iterator/trait.Iterator.html' title='core::iter::iterator::Iterator'>Iterator</a> for <a class='struct' href='sample/signal/struct.Equilibrium.html' title='sample::signal::Equilibrium'>Equilibrium</a>&lt;F&gt; <span class='where'>where F: <a class='trait' href='sample/frame/trait.Frame.html' title='sample::frame::Frame'>Frame</a></span>","impl&lt;G,&nbsp;F&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/iter/iterator/trait.Iterator.html' title='core::iter::iterator::Iterator'>Iterator</a> for <a class='struct' href='sample/signal/struct.Gen.html' title='sample::signal::Gen'>Gen</a>&lt;G,&nbsp;F&gt; <span class='where'>where G: <a class='trait' href='https://doc.rust-lang.org/nightly/core/ops/trait.Fn.html' title='core::ops::Fn'>Fn</a>() -&gt; F</span>","impl&lt;G,&nbsp;F&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/iter/iterator/trait.Iterator.html' title='core::iter::iterator::Iterator'>Iterator</a> for <a class='struct' href='sample/signal/struct.GenMut.html' title='sample::signal::GenMut'>GenMut</a>&lt;G,&nbsp;F&gt; <span class='where'>where G: <a class='trait' href='https://doc.rust-lang.org/nightly/core/ops/trait.FnMut.html' title='core::ops::FnMut'>FnMut</a>() -&gt; F</span>","impl&lt;I,&nbsp;F&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/iter/iterator/trait.Iterator.html' title='core::iter::iterator::Iterator'>Iterator</a> for <a class='struct' href='sample/signal/struct.FromInterleavedSamples.html' title='sample::signal::FromInterleavedSamples'>FromInterleavedSamples</a>&lt;I,&nbsp;F&gt; <span class='where'>where I: <a class='trait' href='https://doc.rust-lang.org/nightly/core/iter/iterator/trait.Iterator.html' title='core::iter::iterator::Iterator'>Iterator</a>, I::Item: <a class='trait' href='sample/trait.Sample.html' title='sample::Sample'>Sample</a>, F: <a class='trait' href='sample/frame/trait.Frame.html' title='sample::frame::Frame'>Frame</a>&lt;Sample=I::Item&gt;</span>","impl&lt;I&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/iter/iterator/trait.Iterator.html' title='core::iter::iterator::Iterator'>Iterator</a> for <a class='struct' href='sample/signal/struct.Hz.html' title='sample::signal::Hz'>Hz</a>&lt;I&gt; <span class='where'>where I: <a class='trait' href='https://doc.rust-lang.org/nightly/core/iter/iterator/trait.Iterator.html' title='core::iter::iterator::Iterator'>Iterator</a>&lt;Item=<a class='primitive' href='https://doc.rust-lang.org/nightly/std/primitive.f64.html'>f64</a>&gt;</span>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/iter/iterator/trait.Iterator.html' title='core::iter::iterator::Iterator'>Iterator</a> for <a class='struct' href='sample/signal/struct.ConstHz.html' title='sample::signal::ConstHz'>ConstHz</a>","impl&lt;S&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/iter/iterator/trait.Iterator.html' title='core::iter::iterator::Iterator'>Iterator</a> for <a class='struct' href='sample/signal/struct.Phase.html' title='sample::signal::Phase'>Phase</a>&lt;S&gt; <span class='where'>where S: <a class='trait' href='sample/signal/trait.Step.html' title='sample::signal::Step'>Step</a></span>","impl&lt;S&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/iter/iterator/trait.Iterator.html' title='core::iter::iterator::Iterator'>Iterator</a> for <a class='struct' href='sample/signal/struct.Sine.html' title='sample::signal::Sine'>Sine</a>&lt;S&gt; <span class='where'>where S: <a class='trait' href='sample/signal/trait.Step.html' title='sample::signal::Step'>Step</a></span>","impl&lt;S&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/iter/iterator/trait.Iterator.html' title='core::iter::iterator::Iterator'>Iterator</a> for <a class='struct' href='sample/signal/struct.Saw.html' title='sample::signal::Saw'>Saw</a>&lt;S&gt; <span class='where'>where S: <a class='trait' href='sample/signal/trait.Step.html' title='sample::signal::Step'>Step</a></span>","impl&lt;S&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/iter/iterator/trait.Iterator.html' title='core::iter::iterator::Iterator'>Iterator</a> for <a class='struct' href='sample/signal/struct.Square.html' title='sample::signal::Square'>Square</a>&lt;S&gt; <span class='where'>where S: <a class='trait' href='sample/signal/trait.Step.html' title='sample::signal::Step'>Step</a></span>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/iter/iterator/trait.Iterator.html' title='core::iter::iterator::Iterator'>Iterator</a> for <a class='struct' href='sample/signal/struct.Noise.html' title='sample::signal::Noise'>Noise</a>","impl&lt;S&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/iter/iterator/trait.Iterator.html' title='core::iter::iterator::Iterator'>Iterator</a> for <a class='struct' href='sample/signal/struct.NoiseSimplex.html' title='sample::signal::NoiseSimplex'>NoiseSimplex</a>&lt;S&gt; <span class='where'>where S: <a class='trait' href='sample/signal/trait.Step.html' title='sample::signal::Step'>Step</a></span>","impl&lt;A,&nbsp;B&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/iter/iterator/trait.Iterator.html' title='core::iter::iterator::Iterator'>Iterator</a> for <a class='struct' href='sample/signal/struct.AddAmp.html' title='sample::signal::AddAmp'>AddAmp</a>&lt;A,&nbsp;B&gt; <span class='where'>where A: <a class='trait' href='sample/signal/trait.Signal.html' title='sample::signal::Signal'>Signal</a>, B: <a class='trait' href='sample/signal/trait.Signal.html' title='sample::signal::Signal'>Signal</a>, A::Item: <a class='trait' href='sample/frame/trait.Frame.html' title='sample::frame::Frame'>Frame</a>, B::Item: <a class='trait' href='sample/frame/trait.Frame.html' title='sample::frame::Frame'>Frame</a>&lt;Sample=A::Item::Sample::Signed,&nbsp;NumChannels=A::Item::NumChannels&gt;</span>","impl&lt;A,&nbsp;B&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/iter/iterator/trait.Iterator.html' title='core::iter::iterator::Iterator'>Iterator</a> for <a class='struct' href='sample/signal/struct.MulAmp.html' title='sample::signal::MulAmp'>MulAmp</a>&lt;A,&nbsp;B&gt; <span class='where'>where A: <a class='trait' href='sample/signal/trait.Signal.html' title='sample::signal::Signal'>Signal</a>, B: <a class='trait' href='sample/signal/trait.Signal.html' title='sample::signal::Signal'>Signal</a>, A::Item: <a class='trait' href='sample/frame/trait.Frame.html' title='sample::frame::Frame'>Frame</a>, B::Item: <a class='trait' href='sample/frame/trait.Frame.html' title='sample::frame::Frame'>Frame</a>&lt;Sample=A::Item::Sample::Float,&nbsp;NumChannels=A::Item::NumChannels&gt;</span>","impl&lt;S&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/iter/iterator/trait.Iterator.html' title='core::iter::iterator::Iterator'>Iterator</a> for <a class='struct' href='sample/signal/struct.ScaleAmp.html' title='sample::signal::ScaleAmp'>ScaleAmp</a>&lt;S&gt; <span class='where'>where S: <a class='trait' href='sample/signal/trait.Signal.html' title='sample::signal::Signal'>Signal</a>, S::Item: <a class='trait' href='sample/frame/trait.Frame.html' title='sample::frame::Frame'>Frame</a></span>","impl&lt;S,&nbsp;F&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/iter/iterator/trait.Iterator.html' title='core::iter::iterator::Iterator'>Iterator</a> for <a class='struct' href='sample/signal/struct.ScaleAmpPerChannel.html' title='sample::signal::ScaleAmpPerChannel'>ScaleAmpPerChannel</a>&lt;S,&nbsp;F&gt; <span class='where'>where S: <a class='trait' href='sample/signal/trait.Signal.html' title='sample::signal::Signal'>Signal</a>, S::Item: <a class='trait' href='sample/frame/trait.Frame.html' title='sample::frame::Frame'>Frame</a>, F: <a class='trait' href='sample/frame/trait.Frame.html' title='sample::frame::Frame'>Frame</a>&lt;Sample=S::Item::Sample::Float,&nbsp;NumChannels=S::Item::NumChannels&gt;</span>","impl&lt;S&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/iter/iterator/trait.Iterator.html' title='core::iter::iterator::Iterator'>Iterator</a> for <a class='struct' href='sample/signal/struct.OffsetAmp.html' title='sample::signal::OffsetAmp'>OffsetAmp</a>&lt;S&gt; <span class='where'>where S: <a class='trait' href='sample/signal/trait.Signal.html' title='sample::signal::Signal'>Signal</a>, S::Item: <a class='trait' href='sample/frame/trait.Frame.html' title='sample::frame::Frame'>Frame</a></span>","impl&lt;S,&nbsp;F&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/iter/iterator/trait.Iterator.html' title='core::iter::iterator::Iterator'>Iterator</a> for <a class='struct' href='sample/signal/struct.OffsetAmpPerChannel.html' title='sample::signal::OffsetAmpPerChannel'>OffsetAmpPerChannel</a>&lt;S,&nbsp;F&gt; <span class='where'>where S: <a class='trait' href='sample/signal/trait.Signal.html' title='sample::signal::Signal'>Signal</a>, S::Item: <a class='trait' href='sample/frame/trait.Frame.html' title='sample::frame::Frame'>Frame</a>, F: <a class='trait' href='sample/frame/trait.Frame.html' title='sample::frame::Frame'>Frame</a>&lt;Sample=S::Item::Sample::Signed,&nbsp;NumChannels=S::Item::NumChannels&gt;</span>","impl&lt;S,&nbsp;M&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/iter/iterator/trait.Iterator.html' title='core::iter::iterator::Iterator'>Iterator</a> for <a class='struct' href='sample/signal/struct.MulHz.html' title='sample::signal::MulHz'>MulHz</a>&lt;S,&nbsp;M&gt; <span class='where'>where S: <a class='trait' href='sample/signal/trait.Signal.html' title='sample::signal::Signal'>Signal</a>, S::Item: <a class='trait' href='sample/frame/trait.Frame.html' title='sample::frame::Frame'>Frame</a>, S::Item::Sample: <a class='trait' href='sample/conv/trait.Duplex.html' title='sample::conv::Duplex'>Duplex</a>&lt;<a class='primitive' href='https://doc.rust-lang.org/nightly/std/primitive.f64.html'>f64</a>&gt;, M: <a class='trait' href='https://doc.rust-lang.org/nightly/core/iter/iterator/trait.Iterator.html' title='core::iter::iterator::Iterator'>Iterator</a>&lt;Item=<a class='primitive' href='https://doc.rust-lang.org/nightly/std/primitive.f64.html'>f64</a>&gt;</span>","impl&lt;S&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/iter/iterator/trait.Iterator.html' title='core::iter::iterator::Iterator'>Iterator</a> for <a class='struct' href='sample/signal/struct.Delay.html' title='sample::signal::Delay'>Delay</a>&lt;S&gt; <span class='where'>where S: <a class='trait' href='sample/signal/trait.Signal.html' title='sample::signal::Signal'>Signal</a>, S::Item: <a class='trait' href='sample/frame/trait.Frame.html' title='sample::frame::Frame'>Frame</a></span>","impl&lt;S&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/iter/iterator/trait.Iterator.html' title='core::iter::iterator::Iterator'>Iterator</a> for <a class='struct' href='sample/signal/struct.ToSamples.html' title='sample::signal::ToSamples'>ToSamples</a>&lt;S&gt; <span class='where'>where S: <a class='trait' href='sample/signal/trait.Signal.html' title='sample::signal::Signal'>Signal</a>, S::Item: <a class='trait' href='sample/frame/trait.Frame.html' title='sample::frame::Frame'>Frame</a></span>","impl&lt;S&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/iter/iterator/trait.Iterator.html' title='core::iter::iterator::Iterator'>Iterator</a> for <a class='struct' href='sample/signal/struct.ClipAmp.html' title='sample::signal::ClipAmp'>ClipAmp</a>&lt;S&gt; <span class='where'>where S: <a class='trait' href='sample/signal/trait.Signal.html' title='sample::signal::Signal'>Signal</a>, S::Item: <a class='trait' href='sample/frame/trait.Frame.html' title='sample::frame::Frame'>Frame</a></span>","impl&lt;S&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/iter/iterator/trait.Iterator.html' title='core::iter::iterator::Iterator'>Iterator</a> for <a class='struct' href='sample/signal/struct.Output.html' title='sample::signal::Output'>Output</a>&lt;S&gt; <span class='where'>where S: <a class='trait' href='sample/signal/trait.Signal.html' title='sample::signal::Signal'>Signal</a>, S::Item: <a class='trait' href='sample/frame/trait.Frame.html' title='sample::frame::Frame'>Frame</a></span>","impl&lt;I&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/iter/iterator/trait.Iterator.html' title='core::iter::iterator::Iterator'>Iterator</a> for <a class='struct' href='sample/rate/struct.Converter.html' title='sample::rate::Converter'>Converter</a>&lt;I&gt; <span class='where'>where I: <a class='trait' href='https://doc.rust-lang.org/nightly/core/iter/iterator/trait.Iterator.html' title='core::iter::iterator::Iterator'>Iterator</a>, I::Item: <a class='trait' href='sample/frame/trait.Frame.html' title='sample::frame::Frame'>Frame</a>, I::Item::Sample: <a class='trait' href='sample/conv/trait.Duplex.html' title='sample::conv::Duplex'>Duplex</a>&lt;<a class='primitive' href='https://doc.rust-lang.org/nightly/std/primitive.f64.html'>f64</a>&gt;</span>","impl&lt;F,&nbsp;W&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/iter/iterator/trait.Iterator.html' title='core::iter::iterator::Iterator'>Iterator</a> for <a class='struct' href='sample/window/struct.Window.html' title='sample::window::Window'>Window</a>&lt;F,&nbsp;W&gt; <span class='where'>where F: <a class='trait' href='sample/frame/trait.Frame.html' title='sample::frame::Frame'>Frame</a>, W: <a class='trait' href='sample/window/trait.Type.html' title='sample::window::Type'>Type</a></span>","impl&lt;'a,&nbsp;F,&nbsp;W&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/iter/iterator/trait.Iterator.html' title='core::iter::iterator::Iterator'>Iterator</a> for <a class='struct' href='sample/window/struct.Windower.html' title='sample::window::Windower'>Windower</a>&lt;'a,&nbsp;F,&nbsp;W&gt; <span class='where'>where F: 'a + <a class='trait' href='sample/frame/trait.Frame.html' title='sample::frame::Frame'>Frame</a>, W: <a class='trait' href='sample/window/trait.Type.html' title='sample::window::Type'>Type</a></span>",];

            if (window.register_implementors) {
                window.register_implementors(implementors);
            } else {
                window.pending_implementors = implementors;
            }
        
})()
