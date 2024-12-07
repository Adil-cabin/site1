<?php
if (!defined('ABSPATH')) {
    exit;
}

class MonPsy_Features_Widget extends \Elementor\Widget_Base {
    public function get_name() {
        return 'monpsy_features';
    }

    public function get_title() {
        return esc_html__('MonPsy Features', 'monpsy');
    }

    public function get_icon() {
        return 'eicon-features-settings';
    }

    public function get_categories() {
        return ['monpsy-elements'];
    }

    protected function register_controls() {
        $this->start_controls_section(
            'content_section',
            [
                'label' => esc_html__('Content', 'monpsy'),
                'tab' => \Elementor\Controls_Manager::TAB_CONTENT,
            ]
        );

        $this->add_control(
            'section_title',
            [
                'label' => esc_html__('Section Title', 'monpsy'),
                'type' => \Elementor\Controls_Manager::TEXT,
                'default' => esc_html__('Pourquoi nous choisir', 'monpsy'),
            ]
        );

        $this->add_control(
            'section_subtitle',
            [
                'label' => esc_html__('Section Subtitle', 'monpsy'),
                'type' => \Elementor\Controls_Manager::TEXT,
                'default' => esc_html__('Une approche professionnelle et bienveillante', 'monpsy'),
            ]
        );

        $repeater = new \Elementor\Repeater();

        $repeater->add_control(
            'feature_title',
            [
                'label' => esc_html__('Feature Title', 'monpsy'),
                'type' => \Elementor\Controls_Manager::TEXT,
                'default' => esc_html__('Feature Title', 'monpsy'),
            ]
        );

        $repeater->add_control(
            'feature_description',
            [
                'label' => esc_html__('Feature Description', 'monpsy'),
                'type' => \Elementor\Controls_Manager::TEXTAREA,
                'default' => esc_html__('Feature description goes here', 'monpsy'),
            ]
        );

        $repeater->add_control(
            'feature_icon',
            [
                'label' => esc_html__('Icon', 'monpsy'),
                'type' => \Elementor\Controls_Manager::ICONS,
            ]
        );

        $this->add_control(
            'features_list',
            [
                'label' => esc_html__('Features', 'monpsy'),
                'type' => \Elementor\Controls_Manager::REPEATER,
                'fields' => $repeater->get_controls(),
                'default' => [
                    [
                        'feature_title' => esc_html__('Disponibilité flexible', 'monpsy'),
                        'feature_description' => esc_html__('Consultations en ligne ou en cabinet selon vos préférences.', 'monpsy'),
                    ],
                ],
                'title_field' => '{{{ feature_title }}}',
            ]
        );

        $this->end_controls_section();
    }

    protected function render() {
        $settings = $this->get_settings_for_display();
        $is_rtl = is_rtl();
        ?>
        <div class="mx-auto max-w-7xl px-6 lg:px-8">
            <div class="mx-auto max-w-2xl lg:text-center <?php echo $is_rtl ? 'rtl' : ''; ?>">
                <h2 class="text-base font-semibold leading-7 text-indigo-600">
                    <?php echo esc_html($settings['section_title']); ?>
                </h2>
                <p class="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                    <?php echo esc_html($settings['section_subtitle']); ?>
                </p>
            </div>
            <div class="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
                <dl class="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-4 <?php echo $is_rtl ? 'rtl' : ''; ?>">
                    <?php foreach ($settings['features_list'] as $feature) : ?>
                        <div class="flex flex-col">
                            <dt class="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900 <?php echo $is_rtl ? 'flex-row-reverse' : ''; ?>">
                                <div class="flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                                    <?php \Elementor\Icons_Manager::render_icon($feature['feature_icon'], ['aria-hidden' => 'true', 'class' => 'h-6 w-6 text-white']); ?>
                                </div>
                                <?php echo esc_html($feature['feature_title']); ?>
                            </dt>
                            <dd class="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                                <p class="flex-auto <?php echo $is_rtl ? 'text-right' : ''; ?>">
                                    <?php echo esc_html($feature['feature_description']); ?>
                                </p>
                            </dd>
                        </div>
                    <?php endforeach; ?>
                </dl>
            </div>
        </div>
        <?php
    }
}