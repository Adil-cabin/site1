<?php
function register_monpsy_widgets($widgets_manager) {
    require_once(__DIR__ . '/hero-section.php');
    require_once(__DIR__ . '/features-section.php');
    require_once(__DIR__ . '/testimonials-section.php');
    require_once(__DIR__ . '/contact-section.php');
    
    $widgets_manager->register(new \MonPsy_Hero_Widget());
    $widgets_manager->register(new \MonPsy_Features_Widget());
    $widgets_manager->register(new \MonPsy_Testimonials_Widget());
    $widgets_manager->register(new \MonPsy_Contact_Widget());
}
add_action('elementor/widgets/register', 'register_monpsy_widgets');

// Add custom category for MonPsy widgets
function add_monpsy_elementor_widget_categories($elements_manager) {
    $elements_manager->add_category(
        'monpsy-elements',
        [
            'title' => esc_html__('MonPsy Elements', 'monpsy'),
            'icon' => 'fa fa-plug',
        ]
    );
}
add_action('elementor/elements/categories_registered', 'add_monpsy_elementor_widget_categories');

// Add translation support
function monpsy_load_plugin_textdomain() {
    load_plugin_textdomain('monpsy', false, dirname(plugin_basename(__FILE__)) . '/languages/');
}
add_action('plugins_loaded', 'monpsy_load_plugin_textdomain');